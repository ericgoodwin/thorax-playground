Application.View.extend({
  name: 'products/product-list',

  events: {
    collection: {
      change: "renderCollection"
    },
    "click a.more": function(evt){
      var el = $(evt.currentTarget).closest('[data-model-cid]')
      var cid = el.data('model-cid')
      this.details(el, cid)
      evt.preventDefault()
    }
  },

  details: function(el, cid){
    var detail = $(el).find('.details')
    var view = new Application.Views['products/product-details']
    view.context = function(){ return Store.getByCid(cid).attributes }
    view.render()
    detail.html(view.el)
    detail.show()
  },

  itemContext: function(item){
    return _.extend({path: "products/"+item.cid }, item.attributes)
  }

})