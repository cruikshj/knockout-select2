require.config({
  baseUrl: '/base', //karma servers files from base
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    knockout: 'bower_components/knockout/dist/knockout',
    select2: 'bower_components/select2/dist/js/select2'
  }
});

require(['spec/knockout-select2'], window.__karma__.start);
