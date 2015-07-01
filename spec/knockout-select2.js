define(['knockout', 'src/knockout-select2'], function (ko, knockoutselect2) {

  describe('Bind', function () {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<select id="select" data-bind="select2:options"></select>';
      document.body.appendChild(root);
      element = document.getElementById('select');
    });

    beforeEach(function () {
      viewModel = {
        options: ko.observable({})
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function () {
      ko.cleanNode(root);
    });

    it('should be bound', function () {
      expect(ko.dataFor(element)).to.be(viewModel);
    });

  });
});
