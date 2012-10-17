Application.Collections.Cart = Application.Collection.extend({
  model: Application.Model.Product,

  initialize: function(){
    //this.on("change", function(){ console.log('cart collection') })
    this.on("add", function(model){ 
      model.set('state', 'cart')
    })
    
    this.on("remove", function(model){ 
      model.set('state', 'store')
    })
  }

});