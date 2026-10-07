const fs = require('fs');
let html = fs.readFileSync('C:\\\\aman\\\\f3-alley\\\\baskin_menu_raw.html', 'utf8');

// Extract styles
const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>');
let css = '';
if (styleStart !== -1 && styleEnd !== -1) {
  css = html.substring(styleStart + 7, styleEnd);
}

// Extract body content
let bodyStart = html.indexOf('<body>');
if (bodyStart !== -1) {
    bodyStart += 6;
} else {
    bodyStart = 0;
}
const bodyEnd = html.indexOf('</body>');
let bodyContent = html.substring(bodyStart, bodyEnd !== -1 ? bodyEnd : html.length);

const tsxContent = "import React from 'react';\n" +
"import './BaskinMenu.css';\n\n" +
"export function BaskinMenu() {\n" +
"  return (\n" +
"    <div className=\"baskin-menu-wrapper\" dangerouslySetInnerHTML={{ __html: `" + bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$') + "` }} />\n" +
"  );\n" +
"}\n";

fs.writeFileSync('C:\\\\aman\\\\f3-alley\\\\client\\\\src\\\\components\\\\BaskinMenu\\\\BaskinMenu.tsx', tsxContent);
fs.writeFileSync('C:\\\\aman\\\\f3-alley\\\\client\\\\src\\\\components\\\\BaskinMenu\\\\BaskinMenu.css', css);

console.log('Successfully generated BaskinMenu component using dangerouslySetInnerHTML');
