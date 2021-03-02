# Getting Started
#### Instalation
<br>

`npm i stylesora --save`

<br><hr>

#### Configuration
##### In webpack.mix.js add the following:

```js
mix.postCss('node_modules/stylesora/dist/stylesora.css', 'public/stylesora').purgeCss({
    folders: ['resources', 'vendor/railroad', 'node_modules/vuesora'],
    whitelistPatterns: [/guitareo/, /semester-pack/, /mce-/, /noty_/, /no-scroll/, /hide-/, /intercom-/, /flatpickr-/,
        /cropper/, /stripe-element-container/, /StripeElement/, /icon-/, /numInput/, /flatpickr/, /cur-year/,
        /numInput-/, /arrowUp/, /arrowDown/]
});
```
##### Include Stylesora in Template

```html
<!-- Include in head -->
<link href="{{ asset('/stylesora/stylesora.css') }}" rel="stylesheet">
```

<br><hr>
#### Library Commands
##### Compile and watch for Development
<br>

`yarn lib:watch`
##### Build for Production
<br>

`yarn lib:build`

<br>
<hr>

#### Developing in other Environments
##### Run Symlink Command
<br>

`./link-stylesora.sh`

<br>

:::tip Linking Environments
The sym-link script allows you to choose from the three major environments (Drumeo, Guitareo, Pianote) as well as the Musora UI Docs.
:::