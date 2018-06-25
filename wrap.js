function wrap(str, num){
  let finalStr = ''

  if(str.length === 0){
    return str
  }

  for (let i = 0; i < str.length; i++){
    finalStr += str[i]
    if (i % num === 0 && i != 0){
      finalStr += '\n'
    }
  }



  return finalStr

}




module.exports = wrap
