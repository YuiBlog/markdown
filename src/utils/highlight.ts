declare const Prism: any; // turatan...

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
  } catch (e) {
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
  let language = lang ? lang : "plain";
  let options = {};

  if (lang.indexOf(":") > 0 && lang.split(":")[1] !== "") {
    // has some options
    language = lang.substr(0, lang.indexOf(":"));
    options = parseOptions(lang.substr(lang.indexOf(":") + 1));
  }

  return `<pre class="language-${language} ${toClasses(options)}" ${toAttributes(options)}>` +
    `<code class="language-${language}">` +
    (Prism.languages[language] ? Prism.highlight(code, Prism.languages[language]) : code) +
    `</code></pre>`;
}
