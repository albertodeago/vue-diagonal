# Getting started

VueDiagonal is a (Vue) component that helps you create easily modern diagonal elements to make your app/website more seductive.  
It comes with no dependencies and **it weights 4kb** before gzip.


## How to install and use

To install the package in your application type
```
npm install vue-diagonal
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

Or like this
``` html
<div class="my-container">
    <vue-diagonal :deg="-4"
                  background="linear-gradient(331deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
                  space-after>
        <div>
            This one will have a gradient background and enough space after 
            to not overlap with the next element
        </div>
    </vue-diagonal>
</div>
```


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


## Author and License

[Alberto De Agostini](https://twitter.com/albertodeago88)

[Show me the code (github)](https://github.com/albertodeago/vue-diagonal)