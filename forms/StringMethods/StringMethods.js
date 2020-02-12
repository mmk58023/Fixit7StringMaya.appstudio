let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
alert(`Quote String is: ${quoteString}`)

let upperCaseString = quoteString.toUpperCase()
alert(`Upper case string is: ${upperCaseString}.`)

let authorString = "- Henry Ford"
alert(`Author string is: ${authorString}.`)

let completeString = quoteString.concat(authorString)
alert(`Complete string is: ${completeString}.`)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
alert(`Second quote is: ${secondQuote}.`)

let lowerCaseString = secondQuote.toLowerCase()
alert(`Lower case string is: ${lowerCaseString}.`)

let secondQuoteLocation = secondQuote.charAt(3)
alert(`The character at location 3 is ${secondQuoteLocation}.`)

secondQuote = secondQuote.split(". ", 1)
secondQuote = secondQuote.toString()
let findString = secondQuote[1]
secondQuote = secondQuote.chop(secondQuote[1])
alert(`Second quote is: ${secondQuote}.`)
alert(`Find string is: ${findString}.`)
