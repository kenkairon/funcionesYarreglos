1) function punto1(tope){
    arr = [];
    for (let index = 0; index < tope; index++) {
        arr[index] = index * 2
    }
    return arr
}

punto1(255)

2)function punto2(tope){
    sum = 0;
    for (let index = 1; index <= tope; index++) {
        if(index%2 == 0){
            sum = sum + index;
        }
    }
    return sum;
}


3)function punto3(tope){
    sum = 0;
    for (let index = 1; index <= tope; index++) {
        if(index%2 ==! 0){
            sum = sum + index;
        }
    }
    return sum;
}

4)function punto4(conjunto){
    sum = 0
    for (let index = 0; index < conjunto.length; index++) {
        sum = sum + conjunto[index];
    }
    return sum;
}
5)
function punto5(conjunto){
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
6)
function punto6(conjunto){
    sum = 0
    for (let index = 0; index < conjunto.length; index++) {
        sum = sum + conjunto[index];
    }
    return sum/conjunto.length;
}
punto6[1,3,5,7,20] 

7)
function punto7(tope){
  arr =[];
    for (let index = 0; index < tope; index++) {
        if(index%2 ==!0){
          arr.push(index)
        }
    }
    return arr;
}
8)
function punto8(conjunto, y){
    sum = 0;
    for (let index = 0; index < conjunto.length; index++) {
        if(conjunto[index] > y){
            sum = sum + 1;
        }
    }
    return sum;
}
9)
function punto9(conjunto){
    cuadrado = [];
    for (let index = 0; index < conjunto.length; index++) {
        cuadrado[index] = Math.pow(conjunto[index], 2)
    }
    return cuadrado;
}
10)
function punto10(conjunto){
    convertido = [];
    for (let index = 0; index < conjunto.length; index++) {
        if(conjunto[index] < 0){
            convertido[index] = 0;
        }else{
            convertido[index] = conjunto[index]
        }
    }
    return convertido;
}
11)
function minimo(conjunto){
    min = 99999;
    min_i = 0;
    for (let index = 0; index < conjunto.length; index++) {
        if(conjunto[index] < min){
            min = conjunto[index]
            min_i = index
        }    
    }
    return min
}
function punto11(conjunto){
    max = punto5(conjunto);
    promedio = punto6(conjunto);
    min = minimo(conjunto);
    resultado = [max, min, promedio];
    return resultado;
}

function punto12(conjunto){
    posUltimo = conjunto.length - 1;
    temp = conjunto[0];
    conjunto[0] = conjunto[posUltimo];
    conjunto[posUltimo] = temp;
    return conjunto;
}

    functionpunto7(tope){​
arr =[];
for (letindex = 0; index < tope; index++) {​
if(index%2 ==!0){​
arr.push(index)
        }​
    }​
returnarr;
}​
​
    functionpunto8(conjunto, y){​
    sum =0;
for (letindex=0; index<conjunto.length; index++) {​
if(conjunto[index] >y){​
            sum = sum +1;
        }​
    }​
return sum;
}​
​
    functionpunto9(conjunto){​
console.log(conjunto);
for (letindex = 0; index < conjunto.length; index++) {​
conjunto[index]=conjunto[index]*conjunto[index]
    }​
returnconjunto;
}​
​
    functionpunto9(conjunto){​
    cuadrado = [];
for (letindex=0; index<conjunto.length; index++) {​
        cuadrado[index] =Math.pow(conjunto[index], 2)
    }​
return cuadrado;
}​
​
    Si
​
    functionpunto10(conjunto){​
console.log(conjunto);
for (letindex = 0; index < conjunto.length; index++) {​
if (conjunto[index]<0){​
conjunto[index]=0
        }​
    }​
returnconjunto;
}​
​
    functionpunto10(conjunto){​
    convertido = [];
for (letindex=0; index<conjunto.length; index++) {​
if(conjunto[index] <0){​
            convertido[index] =0;
        }​else{​
            convertido[index] =conjunto[index]
        }​
    }​
return convertido;
}​
​
    functionminimo(conjunto){​
min = 99999;
min_i = 0;
for (letindex = 0; index < conjunto.length; index++) {​
if(conjunto[index] < min){​
min = conjunto[index]
min_i = index
        }​    
    }​
returnmin
}​
functionpunto11(conjunto){​
max = punto5(conjunto);
promedio = punto6(conjunto);
min = minimo(conjunto);
resultado = [max, min, promedio];
returnresultado;
}​
​
    functionpunto12(conjunto){​
    posUltimo =conjunto.length-1;
    temp =conjunto[0];
conjunto[0] =conjunto[posUltimo];
conjunto[posUltimo] = temp;
returnconjunto;
}​
​
    functionpunto13(conjunto){​
for (letindex=0; index<conjunto.length; index++) {​
if(conjunto[index] <0){​
conjunto[index] ='Dojo';
        }​
    }​
returnconjunto;
}​



