
const verificarString = (x)=>{
    c=0;
    for(i=0; i<x.length;i++){
        if(x[i] ==='a' || x[i] ==='A'){
            console.log(`[${x[i]}]`)
            c++
        }else{
            console.log(x[i])
        }
        
    }
    return c
}

verificarString("aspargo")
console.log("a letra a apareceu um total de :", c , "vezes")