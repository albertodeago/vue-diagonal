![logo]()

# vue-diagonal

VueDiagonal is a (Vue) component that helps you create easily modern diagonal elements to make your app/website more seductive.  
It comes with no dependencies and **it weights 4kb** before gzip.


## How to install and use

To install the package in your application type
```
npm install vue-aspect-ratio
```

Then, to install as a global component
``` javascript
import Vue from "vue";
import VueDiagonal from "vue-diagonal";

Vue.component("vue-diagonal", VueDiagonal)
```

Or you can register locally in one of your components as follows
``` javascript
import VueDiagonal from "vue-diagonal";

export default {
    name: "AmazingComponent",
    props: [myprop],
    components: {
        "vue-diagonal": VueDiagonal
    }
}
```

Using in templates
``` html
<div class="my-container">
    <vue-diagonal :deg="10" background="salmon">
        <div>your content goes here</div>
    </vue-diagonal>
</div>
```

🎉 you've done it!


## Parameters

Component props:

| Name         | Type   | Mandatory | Default | Example   | Description             |
|:-------------|:------:|:---------:|:-------:|:---------:|:------------------------|
| deg          | Number | true      |    -    | 10        | the inclination, in deg |
| max-width    | String | false     | "100%"  | "250px"   | the css value of the width to set on the element |
| background   | String | true      |    -    | "#3c3c3c" | the background css rule to apply, this is what we are going to make it obliquos by skewing it |
| space-before | String | false     | false   | true      | If true it will ad extra space before. Without this if you have "normal" elements before the diagonal component, it may overlap |
| space-after  | String | false     | false   | false     | As before, but add extra space at bottom |


## Events

The component does not emit any events


## Slots

The component has a default slot where you should put your content/text


## Contributing

The project is opened to contributes, suggestions and improvements. You can use the [Issues](https://github.com/albertodeago/vue-diagonal/issues) section.


### Project setup

Fork the project, open it up and type
```
npm install
```

To run the example page, it will open a dev server listening to localhost:8080 (usually), type:
```
npm run dev
```

To build for production
```
npm run build
```

To prepare for pubblication (build both docs and project)
```
npm run prepublish
```

Test are not implemented yet.


## Author and License

[Alberto De Agostini](https://twitter.com/albertodeago88)

Licensed under MIT 