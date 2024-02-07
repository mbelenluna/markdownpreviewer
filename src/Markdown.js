import React, { useState } from 'react';
import { marked } from 'marked';

const defaultText = `
# Header 1
This is a sample text for Header 1.

## Sub Header 2
Here's some text for Sub Header 2.

[Visit OpenAI](https://www.openai.com)

Inline code: \`const greeting = "Hello, World!";\`

Code block:
\`\`\`javascript
function sayHello() {
console.log("Hello, World!");
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> This is a blockquote. It can be used to highlight important information.

![Sample Image](https://via.placeholder.com/150)

**Bolded Text** is bold!
`

export default function MarkdownRenderer() {
    const [markdown, setMarkdown] = useState
    (defaultText);

    const handleInputChange = (event) => {
    setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea id="editor" value={markdown} onChange={handleInputChange} />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    );
}
