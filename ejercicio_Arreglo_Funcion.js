// 1.Cree una función que dado un número n cree un arreglo de largo n, donde en cada
// posición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1
function punto9(conjunto){
    cuadrado = [];
    for (let index = 0; index < conjunto.length; index++) {
        cuadrado[index] = Math.pow(conjunto[index],2)
    }
    return cuadrado;
}



// 2. Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor
// número contenido en el arreglo
function arreglo(conjunto){
    max = 0;
    max_i = 0;
    for (let index = 0; index < conjunto.length; index++) {
        if(conjunto[index] > max){
            max = conjunto[index]
            max_i = index
        }
    }
    return max
}
arreglo([1,2,6,0,4,1,9,5,6,3])

// 3. Dado un arreglo de strings que contiene los días de la semana, cree una función que le
// permita obtener un día en particular si se recibe su número correspondiente.
// Ej: 1 = Lunes , 7 = Domingo.


// 4. Cree una función que le permita buscar un elemento contenido en el arreglo.
// Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100.


// 5. Cree un programa que dado un arreglo de números desordenados los ordene
// ascendentemente