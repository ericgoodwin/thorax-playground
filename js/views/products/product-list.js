Application.View.extend({
  name: 'products/product-list',

  itemContext: function(item){
    return _.extend({path: "products/"+item.cid }, item.attributes)
  }
  
})