Application.View.extend({
  name: 'dashboard/index',
  events: {
    // "click a": function(e){ 
    //   e.preventDefault()
    //   Backbone.history.navigate("/product", { trigger: true })
    // },
    rendered: function() { console.log('rendered') }
  }
})