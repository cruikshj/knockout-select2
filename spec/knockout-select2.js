define(['knockout', 'src/knockout-select2'], function(ko, knockout-select2) {

  describe('Knockout-select2', function() {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<input id="input" data-bind="knockout-select2:obs">';
      document.body.appendChild(root);
      element = document.getElementById('input');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element)).to.be(viewModel);
    });

  });
});
