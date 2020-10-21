const regExp = /#([a-fA-f0-9]{3}){1,2}\b/gi

const str = "color: #3f3; background-color: #AA00ef; and: #abcd"

console.log( str.match(regExp) ) // #3f3 #AA00ef