// escapeExpression = Handlebars.Utils.escapeExpression
// SafeString = Handlebars.SafeString

Handlebars.registerHelper('currentYear', function(){ 
  return '' + new Date().getFullYear()
})

Handlebars.registerHelper('dasherize', function(str){
  return String.prototype.dasherize.call(str)
})

Handlebars.registerHelper('money', function(cents){ 
  var options = { sign: true }

  var sign = ""
  var negative = (cents < 0)
  if(negative && options.sign){ sign = "-" }
  
  var m = (cents / 100).toFixed(2).split(".")
  dollars = m[0]
  cents   = m[1]

  if(negative){
    dollars = dollars.replace("-", "") 
  }

  return sign+"$"+dollars+"."+cents
})

// Handlebars.registerViewHelper 'pluralize', (single, plural, count) ->
//   if count == 1 then single else plural

// Handlebars.registerViewHelper 'format-number', (num) ->
//   (num + '').reverse().match(/.{1,3}/g).reverse().map((str) -> str.reverse()).join(",")

// Handlebars.registerViewHelper 'un-money', (string) ->
//   return parseFloat(string.replace(/[^\d\.]/g, '')) * 100

// Handlebars.registerViewHelper 'strftime', (date, format) ->
//   return moment(date).strftime(format)
