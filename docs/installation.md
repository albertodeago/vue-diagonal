# Installation

## Direct Download / CDN

https://unpkg.com/vue-diagonal/dist/vue-diagonal 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-diagonal@{{ $version }}/dist/vue-diagonal.js
 
Include vue-diagonal after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-diagonal/dist/vue-diagonal.js"></script>
```

## NPM

```sh
$ npm install vue-diagonal
```

## Yarn

```sh
$ yarn add vue-diagonal
```

When used with a module system, you must explicitly install the `vue-diagonal` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-diagonal from 'vue-diagonal'

Vue.use(vue-diagonal)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-diagonal` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-diagonal.git node_modules/vue-diagonal
$ cd node_modules/vue-diagonal
$ npm install
$ npm run build
```

