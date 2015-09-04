# Select2 v4 binding handler for Knockout

[![Build status](https://travis-ci.org/shaftware/knockout-select2.png)](https://travis-ci.org/shaftware/knockout-select2)

## Usage

HTML

    <input data-bind="select2: options" >

JS

    ko.applyBindings({
        options : { } // select2 options
    });


This binding is written in AMD. It returns the binding object. It will attach itself to `knockout.bindingHandlers.select2` once required for the first time. This can be overridden with a config section in your requirejs config like shown below.

```
requirejs.config({
  config: {
    'bower_components/knockout-select2v4/src/knockout-select2': {
        name: 'someOtherName'
    }
  }
});
```

## Dependencies

- jQuery
- knockout
- select2

For accurate versions check bower.json
