var controller = new Application.ViewController({
  
  // Setting the parent as Application will cause
  // Application.setView(this) to be called each
  // time a route is matched on this ViewController
  parent: Application,
  
  // module.routes is set in the output file generated by lumbar
  routes: module.routes,

  list: function(){
    if(!window.Store){
      window.Store = new Products([
        { name: 'Bear Skin Rug',
          price: 50000,
          description: "description here" },
        { name: 'Wolf Paw Toaster',
          price: 6000,
          description: "description here"  },
        { name: 'Bob Cat Slippers',
          price: 8500,
          description: "description here"  },
      ]) 
    }
    var view = new Application.Views['products/product-list']
    view.products = Store
    this.setView(view)
  },

  item: function(cid){
    var view = new Application.Views['products/product-item']
    view.setModel(Store.getByCid(cid))
    this.setView(view)
  }

})