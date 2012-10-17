 Application.Model.Product = Application.Model.extend({
  isInCart: function(){
    return this.get('state') == 'cart'
  }
})