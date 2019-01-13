<template>
  <div class="mx-2">
    <h1 class="my-4">@yuiblog/markdown</h1>
    <div id="app">
      <textarea class="mx-2 border p-1" v-model="markdown" style="height: 500px"/>
      <markdown-renderer class="mx-2" :markdown="markdown"/>
    </div>
  </div>
</template>

<script>
import "prismjs";
import MarkdownRenderer from "../src";

export default {
  components: {
    MarkdownRenderer
  },
  data: () => {
    return {
      markdown: `
# @yuiblog/markdown

Markdown Renderer for YuiBlog.

* GitHub Flavored Markdown by Marked.js
* Syntax Highlighting by Prism.js
* Styled by TailwindCSS default classes


## Features

### Syntax Highlighting with options

\`\`\`javascript:main.js
console.log("Hello, World");
\`\`\`

or

\`\`\`javascript:{name: 'main.js', lineNumbers:true}
function say(word) {
  console.log(word);
}

say("Hello, World");
\`\`\`

`.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~prismjs/themes/prism-okaidia.css";

#app {
  display: flex;

  * {
    flex: 1;
  }
}
</style>
