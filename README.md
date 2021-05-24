# form-svg

<br/>

**formform** module to draw FORMs (as formJSON) in D3/SVG format for visualization in the browser, in PDFs, etc.

Uses my custom [boxmodel-layout-for-d3](https://github.com/formsandlines/boxmodel-layout-for-d3) for the `gsbhooks` visualization type (hook notation used by George Spencer-Brown in his “Laws of Form”).

## Usage

Install [formform](https://github.com/formsandlines/formform) (optional, but may be required in future releases).

Then install the module:

```bash
npm install form-svg
```

```js
// ES6:
import form_svg from 'form-svg';

// CommonJS:
let form_svg = require('form-svg');
```

You can then use the module like this:

```js
form_svg('pack', '((a)b)', { parentId: 'form' });

<div id="form"></div>
```

The FORM visualization will then be put inside the container with the given `parentId`. This behaviour might change in future releases in exchange for a more flexible approach.

<br/>

## Documentation

Comming soon…