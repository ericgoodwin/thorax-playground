Application.Collections.Cart = Application.Collection.extend({
  model: Application.Model.Product,

  initialize: function(){
    this.on("add", function(model){ 
      model.set('state', 'cart')
    })
    
    this.on("remove", function(model){ 
      model.set('state', 'store')
    })
  },

  subtotal: function(){
    if(this.models.length < 1){
      var cents = 0
    }else{
      var cents = _.reduce(this.pluck('price'), function(sum, price) {
        return sum += price
      })
    }
    return cents;
  },

  tax: function(){
    return this.subtotal() * 0.14
  },

  total: function(){
    return this.tax() + this.subtotal()
  }

});