<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { parse } from "../utils/markdown";

@Component({ name: "markdown-renderer" })
export default class MarkdownRenderer extends Vue {
  @Prop({ required: true, type: String })
  public markdown!: string;

  public render(h: any) {
    const html = parse(this.markdown);
    return h("div", { domProps: { innerHTML: html } });
  }
}
</script>

<style lang="scss" scoped>
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
}
</style>
