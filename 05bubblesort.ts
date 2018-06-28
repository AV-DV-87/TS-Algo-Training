/**
 * tri par bulle : explication des bases d'un algorythme de tri
 * attention algorythm peu efficient en terme de ressource
 * parcours du tableaux et remonte les valeurs une à une dans le tableau
 */

 //ESSAI
 export function bubbleSort(array: number []): number[] {
    array = array.slice();
    console.log(array);
    for(let i=0; i< array.length; i++){
        for(let j = 0; j<array.length; j++){
            if(array[j]>array[j+1]){
                [array[j], array[j+1]]=[array[j+1]] = [array[j+1], array[j]];
                console.log(array);
            }
        }
    }
    return array;
 }


//version Optimisé
export function bubblesortExpress(array: number[]) : number[]{
    array.slice();
    //boucle infinie qui sera break gràce à un booléen
    while(true){
        for(let j = 0; j<array.length -1; j++){
            if(array[j]>array[j+1]){
                [array[j], array[j+1]]=[array[j+1]] = [array[j+1], array[j]];
                console.log(array);
            }
        }
    }
    return array;
}
bubblesortExpress([6,5,4,3,2,1]);