/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function AnagramStrings(str1,str2)
{
 let st1=str1.toLowerCase().split('').sort().join('');
  let st2=str2.toLowerCase().split('').sort().join('');

  console.log(st1)
  console.log(st2)
  if (st1===st2)
  {
    console.log("both are anagram strings");
  }
  else
  {
    console.log("both are not anagram strings");
  }
  console.log(st1.toLowerCase())
}

AnagramStrings("sTr1 dghk"," ghkstD1r")

module.exports = isAnagram;
