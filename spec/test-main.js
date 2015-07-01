require.config({
  baseUrl: '/base', //karma servers files from base
  paths: {
    knockout: 'bower_components/knockout.js/knockout'
  }
});

require(['spec/knockout-select2'], window.__karma__.start);
