Application.View.extend(_.extend({
  name: 'cart/cart-list',

  initialize: function(){
    this.cart.on('change', this.render, this)
  },

  context: function(){
    return _.extend({}, {
      subtotal: this.cart.subtotal(),
      taxes:    this.cart.tax(),
      total:    this.cart.total()
    }, this)
  },

  itemContext: function(item){
    return _.extend({}, {
      path:   "products/"+item.cid,
      inCart: item.inCart(),
      state:  item.get('state')
    }, item.attributes)
  }

}, cartMethods))