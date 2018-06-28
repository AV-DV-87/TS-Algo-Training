/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */

/**
 * Returns true if the string is a palindrome
 */
function isPalindrome(s : string): boolean{
    //decoupe le mot et met les dans les tableaux
    //et inverse les et recompose le mot
    const revertWord = s.split('').reverse().join('');
    console.log(revertWord);
    return revertWord === s;

}
console.log(isPalindrome('madam'));

//ne fonctionne pas sur les combinaison plus complexe
//comme TOTO ou CIVIC
