 Application.Model.Product = Application.Model.extend({
  inCart: function(){
    return this.get('state') == 'cart'
  }
})