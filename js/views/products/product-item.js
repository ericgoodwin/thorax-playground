Application.View.extend(_.extend({
  name: 'products/product-item',

  context: function(){
    return _.extend({}, {
      inCart: this.model.inCart(),
    }, this.model.attributes)
  }
}, cartMethods))