let cnee = [[], [], [], [], []]
function subirDatos() {
            var z = 0
            for (var x = 0 ; x <= 4 ; x++){
                for(var y = 0 ; y <= 3; y++){
                 z++
                 var cont= "id" + (z);
                 var valorInput = document.getElementById(cont).value; 
                 cnee[x][y] = valorInput
                } 
            }
            function sumatoria(filas,id){
                var sumapar = []
                var suma = 0
                for (var i = 0 ; i <= 3; i++){
                    sumapar[i] = Number(cnee[filas][i])
                    } 
                for (var i = 0 ; i <= 3 ; i++){
                   var suma = suma + Number(sumapar[i])
                   
                }
                var resultsuma = document.getElementById(id)
                resultsuma.innerHTML = `  ${suma} `
               
              }
              function vertical(columnas,id){
                var sumapar = []
                var suma = 0
                for (var i = 0 ; i <= 4; i++){
                    sumapar[i] = Number(cnee[i][columnas])
                    
                    }
               
                for (var i = 0 ; i <= 4 ; i++){
                   var suma = suma + Number(sumapar[i])
                }
                var resultsuma = document.getElementById(id)
             
                resultsuma.innerHTML = `  ${suma} `
                return suma;
              }
              
              function mayoornumero(filas){
                var sumapar = []
                var empate = Boolean
                for (var i = 0 ; i <= 3; i++){
                    sumapar[i] = Number(cnee[filas][i])
                    }
                    var mayor = sumapar[0] 
                for (var i = 0 ; i <= 3 ; i++){
                   if (sumapar[i] >= mayor ){
                    if (mayor == mayor){
                        empate = true
                    }else{
                        empate = false
                    }
                    mayor = sumapar[i]
                   }
                }
                return mayor
              }
              function mayoorempate(filas){
                var sumapar = []
                var empate = 0
                for (var i = 0 ; i <= 4; i++){
                    sumapar[i] = Number(cnee[filas][i])
                    }
                    
                for (var i = 0 ; i <= 3; i++){
                   if (sumapar[i] === mayoornumero(filas) ){
                    empate++
                   }
                }
                return empate
              }
              function vic(filas){
                var gana = 0
                var sumapar = []
                for (var i = 0 ; i <= 3; i++){
                    sumapar[i] = Number(cnee[filas][i])
                    }
                    var mayor = sumapar[0] 
                for (var i = 0 ; i <= 3 ; i++){
                   if (sumapar[i] >= mayor ){
                    mayor = sumapar[i]
                    gana = i 
                   }
                }
                switch (gana){
                    case 0: 
                    gana = "c-a"
                    break
                    case 1 :
                    gana = "c-b"
                    break
                    case 2 : 
                    gana = "c-c"
                    break
                    case 3 :
                    gana = "c-d" 
                }
                return gana
              }
              sumatoria(0,"id21")
              sumatoria(1,"id22")
              sumatoria(2,"id23")
              sumatoria(3,"id24")
              sumatoria(4,"id25")
              vertical(0,"id26")
              vertical(1,"id27")
              vertical(2,"id28")
              vertical(3,"id29")
               var hola = vertical(3,"id29") +vertical(0,"id26") + vertical(1,"id27") + vertical(2,"id28")
              var sumatodo = document.getElementById("id30")
              sumatodo.innerHTML = `${hola}`
              var bogota = document.getElementById("id31")
              var medellin = document.getElementById("id32")
              var cali = document.getElementById("id33")
              var buca = document.getElementById("id34")
              var pasto = document.getElementById("id35")

            if (mayoorempate(0) >= 2){
                bogota.innerHTML = `hay un empate en los candidatos de bogota con: ${mayoornumero(0)} votos `
            }else{
                bogota.innerHTML = `el ganador de bogota es ${vic(0)} con: ${mayoornumero(0)} votos`
            }
            if (mayoorempate(1)>=2){
                medellin.innerHTML = `hay un empate en los candidatos de medellin con: ${mayoornumero(1)} votos `
            }else{
                medellin.innerHTML = `el ganador de medellin es ${vic(1)} con: ${mayoornumero(1)} votos`
            }
            if (mayoorempate(2)>=2){
                cali.innerHTML = `hay un empate en los candidatos de cali con: ${mayoornumero(2)} votos `
            }else{
                cali.innerHTML = `el ganador de cali es ${vic(2)} con: ${mayoornumero(2)} votos `
            }
            if (mayoorempate(3)>=2){
                buca.innerHTML = `hay un empate en los candidatos de bucaramanga con: ${mayoornumero(3)} votos `
            }else{
                buca.innerHTML = `el ganador de bucaramanga es ${vic(3)} con: ${mayoornumero(3)} votos`
            }
            if (mayoorempate(4)>=2){
                pasto.innerHTML = `hay un empate en los candidatos de pasto con: ${mayoornumero(4)} votos `
            }else{
                pasto.innerHTML = `el ganador de pasto es ${vic(4)} con:  ${mayoornumero(4)} votos`
            }
 }