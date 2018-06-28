/**
 * A word is an anagram of another if you can rearrange its characters to produce the second word.
 * Given two strings determines if they are anagrams of each other.
 * - 'earth' and 'heart' are anagrams
 * - 'silent' and 'listen' are anagrams
 * - 'foo' and 'bar' are not anagrams
 */


//PSEUDO CODE
// export function areAnagrams(s1 : string, s2 : string){
//     for(const permutation of permutation(s1)){
//         if(permutation === s2) return true;
//     }
//     return false;
// }

//VERSION 1
export function areAnagrams(s1 : string, s2 : string){
    //vérifier si les string sont égaux cara à carac
    s1 = s1.split('').sort().join('');
    console.log(s1);
    
    s2 = s2.split('').sort().join('');
    console.log(s2);

    return s1 === s2
    
    
}
console.log(areAnagrams('heart', 'earth'));

//VERSION 2
//--les hashmap et iteration
export function areTrueAnagrams(s1: string, s2: string){
    //création de la map permettant le compte
    const charCount = new Map<string, number>();
    //loop sur le premier mot et rempli la Map
    for(const char of s1.split('')){
        charCount.set(char, (charCount.get(char)||0)+1);
        
    }
    charCount.forEach((val) => console.log(val));
    for(const char of s2.split('')){
        //parcours le tableau des caractères et
        //vérifie un par un la correspondance
        if(!charCount.has(char)) return false;
        //decremente si il y a une correspondance
        charCount.set(char, charCount.get(char) - 1);
        //possibilité d'afficher les valeurs d'une map
        charCount.forEach((val) => console.log(val));
        
    }
    //
    return Array.from(charCount.values()).every(val => val === 0);

}
console.log(areTrueAnagrams('heart', 'earth'));
