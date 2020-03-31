font-awesome-animation [![Build Status](https://travis-ci.org/l-lin/font-awesome-animation.png?branch=master)](https://travis-ci.org/l-lin/font-awesome-animation) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
================
> Simple animations using some CSS3 I found on the web.
> Best used on glyphicons like [FontAwesome](http://fortawesome.github.io/Font-Awesome/).

Getting started
================
Download
----------------
### Manually

The files can be downloaded from:

* Minified [CSS](https://raw.githubusercontent.com/l-lin/font-awesome-animation/0.3.0/dist/font-awesome-animation.min.css) for production usage
* Un-minified [CSS](https://raw.githubusercontent.com/l-lin/font-awesome-animation/0.3.0/dist/font-awesome-animation.css) for development

### With BowerJS

```bash
bower install font-awesome-animation
```

Installation
----------------
Include CSS file in your index.html file: 

```html
<link rel="stylesheet" href="font-awesome-animation.min.css">
```

Usage
================
See [live demo](https://l-lin.github.com/font-awesome-animation).

Development
================
This project is using:
* [GruntJS](http://gruntjs.com/) for adding prefixes and minification purpose
* the CSS preprocessor [Myth](http://www.myth.io/) to generate the prefixes for common browsers

Getting started
----------------
You will need to install the dependencies:

```bash
npm install
```

Build
----------------
You can generate the CSS file with prefixes and the minified CSS file by executing the following command:

```bash
grunt
```

License
================

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
