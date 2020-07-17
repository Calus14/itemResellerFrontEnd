
const regexCheckers = {
  // Regex is stolen from stack overflow but tested on an online tester
  isValidEmailAddress( email ){
    var pattern = new RegExp("^[a-zA-Z0-9\\-_]+(\\.[a-zA-Z0-9\\-_]+)*@[a-z0-9]+(\\-[a-z0-9]+)*(\\.[a-z0-9]+(\\-[a-z0-9]+)*)*\\.[a-z]{2,4}$")
    if (pattern.test(email)) {
      return true;
    }

    return false;
  },

  isValidPassword( password ){
    var pattern=  new RegExp("^[A-Za-z]\\w{7,14}$")
    if( pattern.test(password)){
      return true;
    }

    return false;
  }
}

export default regexCheckers
