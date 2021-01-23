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

## Animation list

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome-animation/css/font-awesome-animation.min.css">

| On DOM Load | On hover | On parent hover |
|-------------|----------|-----------------|
|<a href="#"><i class="fa fa-wrench faa-wrench animated"></i>&nbsp;faa-wrench animated</a>|<a href="#"><i class="fa fa-wrench faa-wrench animated"></i>&nbsp;faa-wrench animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-wrench faa-wrench"></i>&nbsp;faa-wrench</a>|
|<a href="#"><i class="fa fa-bell faa-ring animated"></i>&nbsp;faa-ring animated</a>|<a href="#"><i class="fa fa-bell faa-ring animated"></i>&nbsp;faa-ring animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-bell faa-ring"></i>&nbsp;faa-ring</a>|
|<a href="#"><i class="fa fa-envelope faa-horizontal animated"></i>&nbsp;faa-horizontal animated</a>|<a href="#"><i class="fa fa-envelope faa-horizontal animated"></i>&nbsp;faa-horizontal animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-envelope faa-horizontal"></i>&nbsp;faa-horizontal</a>|
|<a href="#"><i class="fa fa-thumbs-o-up faa-vertical animated"></i>&nbsp;faa-vertical animated</a>|<a href="#"><i class="fa fa-thumbs-o-up faa-vertical animated"></i>&nbsp;faa-vertical animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-thumbs-o-up faa-vertical"></i>&nbsp;faa-vertical</a>|
|<a href="#"><i class="fa fa-warning faa-flash animated"></i>&nbsp;faa-flash animated</a>|<a href="#"><i class="fa fa-warning faa-flash animated"></i>&nbsp;faa-flash animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-warning faa-flash"></i>&nbsp;faa-flash</a>|
|<a href="#"><i class="fa fa-thumbs-o-up faa-bounce animated"></i>&nbsp;faa-bounce animated</a>|<a href="#"><i class="fa fa-thumbs-o-up faa-bounce animated"></i>&nbsp;faa-bounce animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-thumbs-o-up faa-bounce"></i>&nbsp;faa-bounce</a>|
|<a href="#"><i class="fa fa-spinner faa-spin animated"></i>&nbsp;faa-spin animated</a>|<a href="#"><i class="fa fa-spinner faa-spin animated"></i>&nbsp;faa-spin animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-spinner faa-spin"></i>&nbsp;faa-spin</a>|
|<a href="#"><i class="fa fa-plane faa-float animated"></i>&nbsp;faa-float animated</a>|<a href="#"><i class="fa fa-plane faa-float animated"></i>&nbsp;faa-float animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-plane faa-float"></i>&nbsp;faa-float</a>|
|<a href="#"><i class="fa fa-heart faa-pulse animated"></i>&nbsp;faa-pulse animated</a>|<a href="#"><i class="fa fa-heart faa-pulse animated"></i>&nbsp;faa-pulse animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-heart faa-pulse"></i>&nbsp;faa-pulse</a>|
|<a href="#"><i class="fa fa-envelope faa-shake animated"></i>&nbsp;faa-shake animated</a>|<a href="#"><i class="fa fa-envelope faa-shake animated"></i>&nbsp;faa-shake animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-envelope faa-shake"></i>&nbsp;faa-shake</a>|
|<a href="#"><i class="fa fa-trophy faa-tada animated"></i>&nbsp;faa-tada animated</a>|<a href="#"><i class="fa fa-trophy faa-tada animated"></i>&nbsp;faa-tada animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-trophy faa-tada"></i>&nbsp;faa-tada</a>|
|<a href="#"><i class="fa fa-space-shuttle faa-passing animated"></i>&nbsp;faa-passing animated</a>|<a href="#"><i class="fa fa-space-shuttle faa-passing animated"></i>&nbsp;faa-passing animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-space-shuttle faa-passing"></i>&nbsp;faa-passing</a>|
|<a href="#"><i class="fa fa-space-shuttle faa-passing-reverse animated"></i>&nbsp;faa-passing-reverse animated</a>|<a href="#"><i class="fa fa-space-shuttle faa-passing-reverse animated"></i>&nbsp;faa-passing-reverse animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-space-shuttle faa-passing-reverse"></i>&nbsp;faa-passing-reverse</a>|
|<a href="#"><i class="fa fa-circle-o faa-burst animated"></i>&nbsp;faa-burst animated</a>|<a href="#"><i class="fa fa-circle-o faa-burst animated"></i>&nbsp;faa-burst animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-circle-o faa-burst"></i>&nbsp;faa-burst</a>|
|<a href="#"><i class="fa fa-star-o faa-falling animated"></i>&nbsp;faa-falling animated</a>|<a href="#"><i class="fa fa-star-o faa-falling animated"></i>&nbsp;faa-falling animated-hover</a>|<a href="#" class="faa-parent animated-hover"><i class="fa fa-star-o faa-falling"></i>&nbsp;faa-falling</a>|

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

