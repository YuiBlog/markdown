import Prism from "prismjs";

// data-***
interface HighlightOptions {
  // default option
  // code name extension
  // add `data-name="name"` attribute to pre
  name?: string;
}

function parseOptions(options: string): HighlightOptions {
  try {
    return Function(`return ${options}`)() as HighlightOptions;
  } catch  {
    return { name: options };
  }
}

function toAttributes(options: HighlightOptions): string {
  let attrs: string[] = [];

  if (options.name) {
    attrs.push(`data-name="${options.name}"`);
  }

  return attrs.join(" ");
}

function toClasses(options: HighlightOptions): string {
  let classes: string[] = [];

  return classes.join(" ");
}

export function highlight(code: string, lang: string): string {
  if (!lang) {
    return code;
  }

  if (lang.indexOf(":") > 0) {
    // has some options
    const language = lang.substr(0, lang.indexOf(":"));
    const options = parseOptions(lang.substr(lang.indexOf(":") + 1));
    return `<pre class="language-${language} ${toClasses(options)}" ${toAttributes(options)}>` +
      `<code class="language-${language}">` +
      (Prism.languages[language] ? Prism.highlight(code, Prism.languages[language]) : code) +
      `</code></pre>`;
  } else {
    // has no options
    return `<pre class="language-plain"><code class="language-plain">${code}</code></pre>`;
  }
}
