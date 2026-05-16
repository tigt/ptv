const MarkdownItContainer = require('markdown-it-container')

module.exports = function (md) {
  md.use(MarkdownItContainer, 'example', {
    render (tokens, i) {
      return tokens[i].nesting === 1 ? `<aside class="example"><b>⚘ Example:</b>\n` : '</aside>'
    }
  })

  // Stop markdown-it from rendering <p> tags around single-line container contents
  md.core.ruler.after('block', 'container-example', function (state) {
    state.tokens.forEach(({ type }, i) => {
      if (type !== 'container_example_open') { return }

      if (state.tokens[i+1].type === 'paragraph_open' &&
          state.tokens[i+2].type === 'inline' &&
          state.tokens[i+3].type === 'paragraph_close' &&
          state.tokens[i+4].type === 'container_example_close'
        ) {
        state.tokens[i+1].hidden = state.tokens[i+3].hidden = true // https://markdown-it.github.io/markdown-it/#Token.prototype.hidden
      }
    })

    return true
  })
}
