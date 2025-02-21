---
title: Styling and CSS
lang: en-US
---

# Styling and CSS

> Jcrop uses a tight mixture of HTML and CSS to present its user interface.
> This document contains information about modifying the default
> styling to accomodate your UI/UX needs.

## Structural Overview

Wrap the element you wish to attach to:

```html
<div class="jcrop-ux-fade-more">
  <img id="target" src="...">
</div>

<script>
  Jcrop.attach('target');
</script>
```

Or add or remove the class on an existing stage:

```js
jcrop.addClass('jcrop-ux-fade-more');
jcrop.removeClass('jcrop-ux-fade-more');
```

## Useful classes

Several classes can be applied to the container (or parent elements) to
perform some visual tweaks.

### `jcrop-ux-fade-more`

**When widgets are inactive, they will fade more.**
Without this class, the currect selection is less obvious and the display
can be more chatoic if you have many widgets. As such, this class is
recommended for multiple-crop interfaces.

### `jcrop-ux-inactive-handles`

**Display handles on inactive crop widgets.**
The behavior without this class is that handles will be hidden on crop
widgets that are not the currently active widget.

### `jcrop-ux-no-outline`

**No outline style on active widget.**
For aesthetics and accessibility, the currently focused widget has a
small black `outline` style. Applying this class prevents the outline
style.

### `jcrop-ux-keep-current`

**Active widget retains full opacity even when blurred.**
Normally, when focus moves away from the active widget, it fades
slightly. Applying this class will prevent that behavior and keep
the active widget at full opacity.

## SASS template

Jcrop CSS files are compiled using SASS definitions found in the file
`src/css/jcrop.css`. It is recommended that you review this file
before making CSS changes, as it is well-commented and understanding
how the Jcrop CSS is generated by SASS can be helpful even if you are
not using SASS to make your changes.
