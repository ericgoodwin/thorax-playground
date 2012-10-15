escapeExpression = Handlebars.Utils.escapeExpression
SafeString = Handlebars.SafeString

Handlebars.registerViewHelper('currentYear', function(){ 
  return '' + new Date().getFullYear()
})

Handlebars.registerViewHelper('dasherize', function(str){
  return String.prototype.dasherize.call(str)
})

// Handlebars.registerViewHelper 'pluralize', (single, plural, count) ->
//   if count == 1 then single else plural

// Handlebars.registerViewHelper 'format-number', (num) ->
//   (num + '').reverse().match(/.{1,3}/g).reverse().map((str) -> str.reverse()).join(",")

// Handlebars.registerViewHelper 'money', (cents, options={}) ->
//   # TODO: Localization? Comma vs peroid as decimal
//   return null unless cents?

//   options = options?.hash || options
//   options = _.extend { sign: true, wrap: false, tagName: "span" }, options

//   negative = cents < 0
//   sign = if negative && options.sign then "- " else ""


//   # IF someone has a better way, I'm all ears.
//   [dollars, cents] = (cents / 100).toFixed(2).split "."
//   dollars = dollars.replace("-", "") if negative
//   dollars = Synchology.View["format-number"](dollars)

//   str = "#{sign}$#{dollars}.#{cents}"

//   if options.wrap
//     classes = ["money"]
//     classes.push "negative" if negative
//     classes.push options.className if options.className

//     new SafeString "<#{options.tagName} class='#{classes.join " "}'>#{str}</#{options.tagName}>"
//   else
//     str

// Handlebars.registerViewHelper 'un-money', (string) ->
//   return parseFloat(string.replace(/[^\d\.]/g, '')) * 100

// Handlebars.registerViewHelper 'strftime', (date, format) ->
//   return moment(date).strftime(format)

// Handlebars.registerViewHelper 'link', (page) ->
//   args = Array::slice.call(arguments)
//   args = args.slice(0, -1) if _.isObject args[args.length-1]

//   if (args.length > 1)
//     fragment = _.map(args, encodeURIComponent).join('/')
//   else
//     fragment = expandToken(page, this)

//   prefix = if Backbone.history._hasPushState then Backbone.history.options.root else '#'
//   return prefix + fragment
