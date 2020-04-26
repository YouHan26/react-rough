# css-rough
using `css-paint-es` instance of native api

![example](https://i.ibb.co/SDj0fmg/image.png)

Using Houdini CSS [Paint API](https://developers.google.com/web/updates/2018/01/paintapi) with [Rough.js](https://roughjs.com/)

```html
<style>
  .card {
    --rough-border-width: 3;
    --rough-fill: red;
    --rough-fill-weight: 9;
    --rough-fill-style: zigzag;
  }

  input {
    --rough-border-width: 3;
    --rough-fill: white;
    --rough-fill-style: solid;
  }
</style>
<div class="card">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <input type="text" placeholder="Enter some text">
</div>
```

## Install
```bash
import 'css-rough'
```

## CSS Properties

Following properties corresponding to [rough.js options](https://github.com/pshihn/rough/wiki#options) can be set using CSS:

`--rough-fill` - color to fill the element background with.

`--rough-fill-style` - Fill style. Default is *hachure*. Other values can be *solid*, *zigzag*, *cross-hatch*, *dots*. See [rough.js fill style](https://github.com/pshihn/rough/wiki#fillstyle).

`--rough-roughness` - Numeric value defining how rough the shape is. ([more](https://github.com/pshihn/rough/wiki#roughness))

`--rough-hachure-gap` - Numeric gap between hachure lines ([more](https://github.com/pshihn/rough/wiki#hachuregap))

`--rough-hachure-angle` - Numeric angle in degrees of hachure lines ([more](https://github.com/pshihn/rough/wiki#hachureangle))

`--rough-fill-weight` - Numeric value indicating the width of fill lines ([more](https://github.com/pshihn/rough/wiki#fillweight))

`--rough-border-width` - Draw a rough border with the specified numeric width.

`--rough-border-color` - Color of the rough border.

