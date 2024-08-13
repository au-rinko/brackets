module.exports = function check(str, bracketsConfig) {
  const res = [];
  const openBrackets = bracketsConfig.map(pair => pair[0]);
  const closeBrackets = bracketsConfig.map(pair => pair[1]);

  if(str % 2 === 1){
    return false;
  }

  for(let i = 0; i < str.length; i++) {
    if(openBrackets.includes(str[i])){
      if(res[res.length - 1] === str[i] && closeBrackets.includes(str[i])){
        res.pop();
      }else{
        res.push(str[i]);
      }
    }else if(closeBrackets.includes(str[i])){
      if(res.length > 0){
        if(res[res.length - 1] == openBrackets[closeBrackets.indexOf(str[i])]){
          res.pop();
        }else{
          return false;
        }
      }else{
        return false;
      }
    }
  }

  return res.length === 0;

}
