Application.View.extend({
  name: 'products/product-list',

  initialize: function()
  {
    // this.products.on('change', this.render, this)
    // this.cart.on('change', this.render, this)
  },

  //events: {
  //  all: function(arg){ console.log(arg) }
  //},

  addToCart: function(event){
    var model = $(event.target).model()

    this.cart.add(model)
  },

  removeFromCart: function(){
    var model = $(event.target).model()

    this.cart.remove(model)
  },

  details: function(event){
    var $t      = $(event.target)
    var model   = $t.model()
    var element = $t.closest('li')
    var dEl     = element.find(".details")
    if(dEl.html()=="")
    {
      var view = new Application.Views['products/product-details']({
      el: dEl
      })
      view.setModel(model)
      view.render()
    }
    dEl.toggle()
  },

  itemContext: function(item){
    return _.extend({}, {
      path:   "products/"+item.cid,
      inCart: item.isInCart(),
      state:  item.get('state')
    }, item.attributes)
  }

})