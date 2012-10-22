cartMethods = {

  addToCart: function(event){
    var model = $(event.target).model()

    this.cart.add(model)
  },

  removeFromCart:  function(){
    var model = $(event.target).model()

    this.cart.remove(model)
  }

}