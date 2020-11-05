function anagram(str1, str2) {
    let chars1 = {};
    let chars2 = {};
  
    for(let char of str1.replace(/[^\w]/gi, '')) {
      if(chars1[char]) {
        chars1[char]++;
      } else {
        chars1[char] = 1;;
      }
    }
  
    for(let char of str2.replace(/[^\w]/gi, '')) {
      if(chars2[char]) {
        chars2[char]++;
      } else {
        chars2[char] = 1;;
      }
    }
  
  
    for(let key in chars1) {
      if(!(key in chars2)) {
        return false;
      }
  
      if(chars2[key] !== chars1[key]) {
        return false;
      }
    }
  
  
  
    return true;
  }
  