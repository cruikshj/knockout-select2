require.config({
  baseUrl: '/base', //karma servers files from base
  paths: {
    jquery: 'bower_components/jQuery/dist/jquery',
    knockout: 'bower_components/knockout.js/knockout'
  }
});

require(['spec/knockout-select2'], window.__karma__.start);
