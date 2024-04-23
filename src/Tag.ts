type Attributes = {
  [ket: string]: string,
};

class Tag {
  constructor(public name: string, public atr: Attributes, public text?: string) {
    this.name = name;
    this.atr = atr;
    this.text = text;
  }

  toString() {
    const singleTags: string[] = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    const attributes = Object.entries(this.atr).map(([key, value]) => `${key}="${value}"`).join(' ');
    const resAtr = attributes.length > 0 ? ` ${attributes}` : '';
    if (singleTags.includes(this.name)) {
      return `<${this.name}${resAtr}>`;
    }
    return `<${this.name}${resAtr}>${this.text}</${this.name}>`;
  }
}

export default Tag;
