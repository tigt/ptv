import fs from 'fs'
import createTorrent from 'https://www.npmjs.com/package/create-torrent'

const VERSION = '0.9'
const gitHubUrl = `https://github.com/tigt/ptv/releases/latest/download/ptv-${VERSION}.zip`

createTorrent(`./ptv-${VERSION}.zip`, function (err, torrent) {
  if (err) { throw err }
  fs.writeFile('my.torrent', torrent)
})

export const magnetUrl = 'magnet:?' + new URLSearchParams({
  xt: `urn:btih:${thispartisnotoptional}`,
  dn: `Pokémon Tabletop Version ${VERSION}.zip`,
  as: gitHubUrl,
  xs: 'a URL to a .torrent file representing this??? https://wiki.theory.org/BitTorrent_Magnet-URI_Webseeding',
  kt: 'pokemon tabletop version rpg'
})
