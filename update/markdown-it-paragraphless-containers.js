const MarkdownItContainer = require('markdown-it-container')

const containers = {
  example: {
    render (tokens, i) {
      return tokens[i].nesting === 1 ? `<aside class="example"><b>⚘ Example:</b>\n` : '</aside>'
    }
  },
  details: {
    render (tokens, i) {
      const [, summary] = tokens[i].info.trim().match(/^details\s+(.*)$/)
      return tokens[i].nesting === 1
        ? `<details><summary>${md.utils.escapeHtml(summary)}</summary>\n` // TODO do I have access to `md` in this scope? I hope so
        : '</details>'
    }
  }
}

module.exports = function (md) {
  for (const name in containers) {
    addTightenedContainer(name, containers[name], md)
  }
}

function addTightenedContainer (name, mdItContainerOpts, md) {
  md.use(MarkdownItContainer, name, mdItContainerOpts)

  // Stop markdown-it from rendering <p> tags around single-line container contents
  md.core.ruler.after('block', `container-${name}`, function (state) {
    state.tokens.forEach(({ type }, i) => {
      if (type !== `container_${name}_open`) { return }

      if (state.tokens[i+1].type === 'paragraph_open' &&
          state.tokens[i+2].type === 'inline' &&
          state.tokens[i+3].type === 'paragraph_close' &&
          state.tokens[i+4].type === `container_${name}_close`
        ) {
        state.tokens[i+1].hidden = state.tokens[i+3].hidden = true // https://markdown-it.github.io/markdown-it/#Token.prototype.hidden
      }
    })

    return true
  })
}
