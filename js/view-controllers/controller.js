var controller = new Application.ViewController({
  
  // Setting the parent as Application will cause
  // Application.setView(this) to be called each
  // time a route is matched on this ViewController
  parent: Application,
  
  // module.routes is set in the output file generated by lumbar
  routes: module.routes,

  cart: function(){
    var view = new Application.Views['cart/cart-list']({
      cart: Application.cart
    })
    this.setView(view)
  },

  list: function(){
    if(!window.Store){
      window.Store = new Products([
        { name: 'Bear Skin Rug',
          price: 50000,
          description: "description here",
          state: "store" },
        { name: 'Wolf Paw Toaster',
          price: 6000,
          description: "description here",
          state: "store"  },
        { name: 'Bob Cat Slippers',
          price: 8500,
          description: "description here",
          state: "store"  },
      ]) 
    }
    var view = new Application.Views['products/product-list']({
      products: Store,
      cart: Application.cart
    })
    this.setView(view)
  },

  item: function(cid){
    var view = new Application.Views['products/product-item']({
      model: Store.getByCid(cid),
      cart: Application.cart
    })
    this.setView(view)
  }

})