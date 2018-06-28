

//fonction de tri avancée
export function quicksort(array: number[]): number[] {
    array = array.slice();

    // fonction de partition
    partition(array, 0, array.length);
    
    return array;
}

/**
 * Partition : 
 * param array,
 * param2 start point
 * param3 end length of array
 */
function partition(array: number[], start: number, before: number): void{
    console.log("avant"+array);
    const length = before - start;
    
    if(length <= 1) return;

    //index du pivot pris au hasard dans la plage des valeurs
    const pivotIndex = start + Math.floor(Math.random()*length);
    //placement du pivot au premier index du tableau
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
    
    /**
     * Utilisation tableau à pivot pour le tri
     * Tri des valeurs par rapport à une valeur pivot
     */

     //1er élément du tableau est le pivot
     const pivot = array[start];
     let pivotRank = start;

    /**
     * BOUCLE sur les éléments mis dans la PARTITION
     * item avant pivot,
     * - index du classement du pivot
     * item plus grand que le pivot
     * - index de l"item en cours de classement
     */
    for(let index = start + 1; index<before; index++){
        if(array[index]<pivot){
            pivotRank++;
            [array[index], array[pivotRank]] = [array[pivotRank], array[index]]
        }
        // console.log(array);
        
    }
    if(pivotRank !== start){
        [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    }
    //partition de tous les éléments en dessous du pivot
    partition(array, start, pivotRank);
    
    
    // partition de tous les éléments au dessus du pivot
    partition(array, pivotRank + 1, before);
    console.log('aprés'+array);
}

const unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(quicksort(unsortedArray));