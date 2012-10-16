Application.View.extend({
  name: 'products/product-list',
  // products: Store,

  events: {
    collection: {
      change: "renderCollection"
    }
  },

  buy: function(event){
    var $t      = $(event.target)
    var model   = $t.model()

    // Add to your cart
    Application.cart.add(model)

    console.log("BUY IT NOW: "+model.get('name')+' to ')
    console.log(Application.cart)
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
    return _.extend({path: "products/"+item.cid }, item.attributes)
  }

})