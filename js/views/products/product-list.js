Application.View.extend(_.extend({
  name: 'products/product-list',

  initialize: function(){},

  //events: {
  //  all: function(arg){ console.log(arg) }
  //},

  details: function(event){
    var $t      = $(event.target)
    var model   = $t.model()
    var element = $t.closest('li')
    var dEl     = element.find(".details")
    if(dEl.html()=="")
    {
      var view = new Application.Views['products/product-details']({
      el: dEl
      })
      view.setModel(model)
      view.render()
    }
    dEl.toggle()
  },

  itemContext: function(item){
    return _.extend({}, {
      path:   "products/"+item.cid,
      inCart: item.inCart(),
      state:  item.get('state')
    }, item.attributes)
  }

}, cartMethods))