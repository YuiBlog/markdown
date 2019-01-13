# @yuiblog/markdown

[![NPM version](https://img.shields.io/npm/v/@yuiblog/markdown.svg?style=flat)](https://npmjs.com/package/@yuiblog/markdown) [![NPM downloads](https://img.shields.io/npm/dm/@yuiblog/markdown.svg?style=flat)](https://npmjs.com/package/@yuiblog/markdown) [![CircleCI](https://circleci.com/gh/mika-f/@yuiblog/markdown/tree/master.svg?style=shield)](https://circleci.com/gh/mika-f/@yuiblog/markdown/tree/master)

Markdown renderer for YuiBlog.


## Install

```bash
yarn add @yuiblog/markdown
```

CDN: [UNPKG](https://unpkg.com/@yuiblog/markdown/) | [jsDelivr](https://cdn.jsdelivr.net/npm/@yuiblog/markdown/) (available as `window.MarkdownRenderer`)

## Usage

```vue
<template>
  <markdown-renderer :markdown="markdown" />
</template>

<script>
import MarkdownRenderer from '@yuiblog/markdown'

export default {
  components: {
    MarkdownRenderer
  },
  data: () => {
    return {
      markdown: "Your markdown here."
    }
  }
}
</script>
```

## License

MIT &copy; [Mikazuki Fuyuno](https://mochizuki.moe)
