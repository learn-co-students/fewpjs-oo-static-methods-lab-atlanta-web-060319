class Formatter {
  //add static methods here
  static capitalize(string) {
   let first = string.charAt(0).toUpperCase()
   let last = string.substring(1)
    return first + last
  }

  static sanitize(string) {
 let myString = string.replace(/[^A-Za-z0-9 '-]/g, '')
  return myString
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let endResult    = [];
    let arrayOfWords = string.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        endResult.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          endResult.push( arrayOfWords[ n ] )
        } else {
          endResult.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return endResult.join( " " );
  }

}

