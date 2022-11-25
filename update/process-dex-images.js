const sharp = require('sharp')
const crypto = require('crypto')
const fs = require('fs/promises')
const path = require('path')

;(async function() {
  const imageFiles = (await fs.readdir(`${__dirname}/img/`))
    .filter(filename => filename.endsWith('.png')) // Avoid .DS_Store and other gunk files

  const outputPromises = []
  for (const filename of imageFiles) {
    const basename = filename.replace(/\.png$/, '')
    const pathIn = path.join(__dirname, '/img/', filename)
    const pathOut = path.join(__dirname, '/../docs/dex/img/', basename + '.jpg')

    outputPromises.push(fs.readFile(pathIn).then(bytes => {
      const hash = crypto.createHash('md5')
        .update(bytes)
        .digest('base64')
        .substring(0, 7)
        .replace(/[/+=]/g, char => {
          switch (char) {
            case '/': return '_'
            case '+': return '-'
            default: return ''
          }
        })
      
      const fullFilePromise = sharp(pathIn)
        .resize({
          width: 400,
          height: 400,
          fit: 'inside',
          withoutEnlargement: true
        })
        .blur(0.3) // Some original images have crust like whoah
        .flatten({ background: '#ecebdd' })
        .jpeg({
          mozjpeg: true,
          quality: 85
        })
        .toFile(pathOut)

      const avgColorPromise = sharp(pathIn)
        .resize({
          width: 1,
          height: 1,
          fit: 'fill'
        })
        .removeAlpha()
        .modulate({ saturation: 1.5 })
        .raw()
        .toBuffer()

      return Promise.all([fullFilePromise, avgColorPromise])
        .then(([fullFile, avgColor]) => [basename, {
          sizes: [fullFile.width, fullFile.height],
          hash,
          avgColor: rgbBufToHexCode(avgColor)
        }])
    }))
  }

  const results = {}

  await Promise.all(outputPromises).then(p => {
    const sorted = p.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, img] of sorted) {
      const [basename, variant] = name.split('--')
      if (variant) {
        if (results[basename]) {
          results[basename][variant] = img
        } else {
          throw Error(`Didn’t find base Pokémon “${basename}” image for variant image “${name}”`)
        }
      } else {
        results[basename] = img
      }
    }
  })

  await fs.writeFile(
    `${__dirname}/../11ty/_data/dex-images.json`,
    JSON.stringify(results, null, 2)
  )
})()

function rgbBufToHexCode (buf) {
  let color = '#'
  for (const component of buf) {
    if (component < 16) color += '0';
    color += component.toString(16)
  }
  return color
}