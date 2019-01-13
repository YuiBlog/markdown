<template>
  <div v-html="html"></div>
</template>

<script lang="ts">
import Vue from "vue";

import { parse } from "../utils/markdown";

export default Vue.extend({
  name: "markdown-renderer",
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  computed: {
    html(): string {
      return parse(this.markdown);
    }
  }
});
</script>

<style lang="scss" scoped>
// Prism theme
@import "~prismjs/themes/prism-okaidia.css";

div {
  overflow-wrap: break-word;
}

/deep/ pre[class*="language-"] {
  border-radius: 0;

  &[data-name] {
    position: relative;
    padding: 2em 1em 1em 1em;

    &::before {
      background: #dae1e7;
      color: #606f7b;
      content: attr(data-name);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 2px 4px;

      // reset
      text-shadow: none;
    }
  }

  li.leading-normal {
    p {
      margin: 0;
    }
  }
}
</style>
