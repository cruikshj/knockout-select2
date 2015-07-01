# Knockout-select2 binding for knockout

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

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install & bower install

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop