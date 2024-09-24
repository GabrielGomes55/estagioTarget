//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)
        
        x=0
        y=0
        z=1
        encontrado=false;
        j=34 // número que vai ser procurado
        
        while(x<=j){
            if(x === j ){
                encontrado = true
                console.log([x])
                break
            }
            console.log(x)
            y=x
            x = x+z
            z=y
        }
        
        console.log("numero encontrado na sequência de Fibonacci = ", encontrado)
        
          