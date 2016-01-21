# Select2 v4 binding handler for Knockout

[![Build status](https://travis-ci.org/cruikshj/knockout-select2.png)](https://travis-ci.org/cruikshj/knockout-select2)
[![Bower version](https://badge.fury.io/bo/knockout-select2v4.svg)](http://badge.fury.io/bo/knockout-select2v4)
[![NuGet version](https://badge.fury.io/nu/knockout-select2.svg)](http://badge.fury.io/nu/knockout-select2)

## Usage

HTML

    <select data-bind="select2: options" ></select>

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
