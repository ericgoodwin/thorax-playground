Application.View.extend({
  name: 'header',
  el:    document.getElementById("header"),

  initialize: function(){
    this.cart.on('change', this.render, this)
  },

  context: function(){
    return { cartlength: this.cart.length }
  }

})