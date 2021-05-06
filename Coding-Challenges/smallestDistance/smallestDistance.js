#!/usr/bin/env node

const smallestDistance = (words, string) => {
  let wordsSplit = words.split(' ')
  let stringSplit = string.split(' ')
  let firstWordIndex = 0
  let secondWordIndex = 0

  for(let i = 0; i < stringSplit.length; i++){
    if(wordsSplit[0] === stringSplit[i]){
      firstWordIndex = i
    }
    if(wordsSplit[1] === stringSplit[i]){
      secondWordIndex = i
    }
  }
  let distance = (secondWordIndex - firstWordIndex) - 1
  return distance
};

console.log(smallestDistance("hello world", "dog cat hello cat dog dog cat world")); // 1
