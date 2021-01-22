# font-awesome-animation 

> Simple animations using some CSS3 I found on the web.
> Best used on glyphicons like [FontAwesome][]

![build](https://github.com/l-lin/font-awesome-animation/workflows/build/badge.svg)
[![npm](https://img.shields.io/npm/v/font-awesome-animation.svg)][npm-link]
[![npm](https://img.shields.io/npm/dm/font-awesome-animation.svg)][npm-link]
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/font-awesome-animation/badge?style=rounded)][cdn-link]

## Getting started

Install from NPM:

```bash
npm install font-awesome-animation
```

Or with a CDN:

[https://www.jsdelivr.com/package/npm/font-awesome-animation][cdn-link]

Include CSS file in your index.html file:

```html
<link rel="stylesheet" href="font-awesome-animation.min.css">
```

## Usage
### On DOM load

Add the desired CSS class `faa-xxx` along with `animated` to the icon (or any element of your DOM):

```html
<i class="fa fa-wrench faa-wrench animated"></i>
```

### On hover

Instead of using `animated`, use the `animated-hover` CSS class:

```html
<i class="fa fa-wrench faa-wrench animated-hover"></i>
```

### On parent element hover

For parent hover, add the CSS class `faa-parent` and `animated-hover` on the parent element:

```html
<a href="#" class="faa-parent animated-hover">
  <i class="fa fa-wrench faa-wrench"></i>
</a>
```

You can regulate the speed of the animation by adding the CSS class `faa-fast` or `faa-slow`:

```html
<i class="fa fa-wrench faa-wrench animated faa-fast"></i>
<i class="fa fa-wrench faa-wrench animated faa-slow"></i>
```

## Development

```bash
# install dependencies
npm install

# generate prefixes and minified CSS files
npm run build
```

## License

[MIT License](LICENSE)

[FontAwesome]: https://fontawesome.com/
[npm-link]: https://www.npmjs.com/package/font-awesome-animation
[cdn-link]: https://www.jsdelivr.com/package/npm/font-awesome-animation

