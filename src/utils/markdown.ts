import Marked from "marked";
import { highlight } from "./highlight";

export function parse(markdown: string): string {
  const renderer = new Marked.Renderer();

  // blocks
  renderer.blockquote = (quote) => `<blockquote class="border-l-4 pl-4 py-1 bg-grey-lightest">${quote}</blockquote>`;
  renderer.code = (code, lang) => highlight(code, lang);
  renderer.heading = (text, level, _raw, slugger) => {
    const classes: string[] = ["mt-6", "mb-3"];
    if (level == 1 || level == 2) {
      classes.push("border-b pb-1");
    }
    return `<h${level} id="${slugger.slug(text)}" class="${classes.join(" ")}">${text}</h${level}>`;
  };
  renderer.hr = () => `<hr class="border-2"/>`;
  renderer.listitem = text => `<li class="leading-normal">${text}</li>\n`;
  renderer.paragraph = text => `<p class="my-4 leading-normal">${text}</p>\n`;

  // inline
  renderer.codespan = code => `<code class="font-mono rounded bg-black text-white p-1">${code}</code>`;
  renderer.link = (href, title, text) => {
    const external = /^https?:\/\//.test(href);
    const attributes = external ? `target="_blank" rel="noopener noreferrer"` : "";
    return `<a href="${href}" ${attributes} ${(title ? `title="${title}"` : "")}>${text}</a>`;
  }

  Marked.setOptions({
    gfm: true,
    tables: true
  });

  return Marked.parse(markdown, { renderer });
}