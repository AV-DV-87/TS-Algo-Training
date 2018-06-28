export function triInsertion(array: number[]): number[]{
    //fais une copie de tableau en prenant une portion
    array = array.slice();
    console.log(array);
    
    for(let i = 1; i < array.length; i++){
        //index du nombre séléctionné
        const current = array[i];
        console.log({section: array.slice(0,i), current});
        
        /**
         * selection de l'entrée du tableau précédente
         * comparaison à la valeur de l'actuel
         */
        let j = i-1;
        while(j>=0 && array[j] > current){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }

    console.log(array);
    return array;
}

triInsertion([4, 3, 2, 1]);