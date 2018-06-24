/** CAS 1 */
//tri d'un tableau simple
const arr = ['foo', 'bar'];
const copyTri = arr.sort();
console.log(arr);
console.log(copyTri);
//la méthode sort tri mais modifier l'original définitivement

/** CAS 2 */
//--mettre le tableau en lecture seule
const arr2: ReadonlyArray<string> = ['foo', 'bar'];
//--prend le tableau 2 tranche le puis tri le
const copy = arr2.slice().sort();

/** CAS3 */
//La méthode Sort prend en compte l'unicode des lettres 
//pour trier le tableau il est incapable de trier des 
//chiffres 1 22 3 et pas 1 3 22
const arr3 = [1, 3, 22];
//utilisation de la méthode sort avec un comparateur
arr3.sort((a,b)=>a-b);
//si a<b renvoi un négatif si a===b renvoi 0 si a>b renvoi un positif
console.log(arr3);

/** CAS4 */
//tri sur des objets
const movies = [
    {
        name: "The Shawshank Redemtion",
        year: 1994
    },
    {
        name: "The Godfather",
        year: 1972
    },
    {
        name: "The Godfather: Part II",
        year: 1974
    },
    {
        name: "The Dark Knight",
        year: 2008
    }
]
// Sorts in ascending order
movies.sort((b,a) => b.year - a.year);

console.log("Sort on an attribute of an object: ", "")
movies.forEach(function(movie) {
  console.log("", movie.name)
});

/** CAS5 sensibilite à la case */
//--le comportement par défaut de sort va mettre les 
//mots commencant par une majuscule avant les miniuscules
const arr4 = [
    'Riri',
    'Loulou',
    'fifi'
];
arr4.sort((a,b)=> a.toLowerCase()
.localeCompare(b.toLowerCase()));
arr4.forEach(x=> console.log(x));