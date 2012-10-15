new Application.ViewController({
  
  // Setting the parent as Application will cause
  // Application.setView(this) to be called each
  // time a route is matched on this ViewController
  parent: Application,
  
  // module.routes is set in the output file generated by lumbar
  routes: module.routes,

  list: function(){
    var view = new Application.Views['products/product-list']
    view.products = new Products([
      { name: 'Bear Skin Rug',
        price: 50000 },
      { name: 'Wolf Paw Toaster',
        price: 6000 },
      { name: 'Bob Cat Slippers',
        price: 8500 },
    ])
    this.setView(view)
  },

  item: function(cid){
    console.log("ITEM SHOW: "+cid)
    product = new Products([
      { name: 'Bear Skin Rug',
        price: 50000 }
    ]).at(0)

    var view = new Application.Views['products/product-item']
    view.setModel(product)
    this.setView(view)
  }

})