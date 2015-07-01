/* jshint boss:true*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'knockout', 'module'], factory);
    } else {
        factory(jQuery, ko);
    }
})(function ($, ko, module) {
    'use strict';

    var bindingName = 'select2';
    if (module && module.config().name) {
        bindingName = module.config().name;
    }
    
    var ec = 'equalityComparer';
    var oec = '_' + ec;
    function suppressNotify(observable) {
        observable[oec] = observable[ec];
        observable[ec] = function () { return true; };
    }    
    function allowNotify(observable) {
        observable[ec] = observable[oec];
        observable[oec] = null;
    }

    return ko.bindingHandlers[bindingName] = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

            var bindingValue = ko.unwrap(valueAccessor());
            var allBindings = allBindingsAccessor();
            var ignoreChange = false;
            
            $(element).on("select2:selecting select2:unselecting", function() {
                ignoreChange = true;
            });            
            $(element).on("select2:select select2:unselect", function() {
                ignoreChange = false;
            });
            
            if (ko.isObservable(allBindings.value)) {
                allBindings.value.subscribe(function (value) {
                    if (ignoreChange) return;
                    suppressNotify(this.target);
                    $(element).trigger('change');
                    allowNotify(this.target);
                });
            } else if (ko.isObservable(allBindings.selectedOptions)) {               
                allBindings.selectedOptions.subscribe(function (value) { 
                    if (ignoreChange) return;
                    suppressNotify(this.target);
                    $(element).trigger('change');
                    allowNotify(this.target);
                });
            }
           
            // Apply select2 and initialize data; delay to allow other binding handlers to run
            setTimeout(function () {

                // Apply select2
                $(element).select2(bindingValue);
                
                // Destroy select2 on element disposal
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(element).select2('destroy');
                });

            }, 0);

        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        }
    };
});