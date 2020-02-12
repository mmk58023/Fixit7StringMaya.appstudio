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

let secondQuoteLocation = secondQuote.charAt(2)
alert(`The character at location 3 is ${secondQuoteLocation}.`)

//creates new variable findString which seperates the quote into an array of strings
let findString = secondQuote.split(`. `)
  console.log(`${findString}`)
  
// stores the removed string in this new variable
let removedString = findString.splice(1,1)
  alert(`The removed string is: ${removedString}`)
  
//stores and displays the adjusted second quote
let wantedSecondQuote = secondQuote.replace("What separates the talented individual from the successful one is a lot of hard work.","")
  alert(`The second quote is now: ${wantedSecondQuote}`)