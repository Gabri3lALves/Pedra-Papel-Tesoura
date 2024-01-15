


const fundo = document.getElementById("textosJog")

const pedraJ = document.getElementById("pedraJ")
const papelJ = document.getElementById("papelJ")
const tesouraJ = document.getElementById("tesouraJ")

const pedraM = document.getElementById("pedraM")
const papelM = document.getElementById("papelM")
const tesouraM = document.getElementById("tesouraM")

const botao = document.getElementById("botao")

let placarUsuario = 0;
let placarMaquina = 0;

let tela = document.getElementById("resultadoTela")
//Funcionalidades
pedraJ.addEventListener("click",jogarPedra)

function jogarPedra(){

    var numeroAleatorio = Math.floor(Math.random() * 3) + 1 
    if (numeroAleatorio == 1){
        console.log("empate")
        pedraM.classList.add('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')
       
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
           tela.innerHTML = "Você ganhou! Parabéns!!!"
            
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    }
     else if(numeroAleatorio == 2){
        console.log("Perdeu")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.add('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')

        placarMaquina++       
        document.getElementById('placarMaquina').innerHTML = `${placarMaquina}`
        
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    }
    else{
        console.log("Ganhou")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.add('tesouraM-Atl')
        placarUsuario++
        document.getElementById('placarUsuario').innerHTML = `${placarUsuario}`
        
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
             = "Você ganhou! Parabéns!!!"
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
        
    }

}

papelJ.addEventListener("click",jogarPapel)
function jogarPapel(){ 
    

    var numeroAleatorio = Math.floor(Math.random() * 3) + 1 
    if (numeroAleatorio == 1){
        
        console.log("Ganhou")
        pedraM.classList.add('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')
        placarUsuario++
        document.getElementById('placarUsuario').innerHTML = `${placarUsuario}`
        
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!" 
            
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
        
    }
     else if(numeroAleatorio == 2){
        console.log("Empatou")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.add('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')
        
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!" 
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    }
    else{
        console.log("Perdeu")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.add('tesouraM-Atl')
        placarMaquina++
        document.getElementById('placarMaquina').innerHTML = `${placarMaquina}`

        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
             
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             
            tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    }
}

tesouraJ.addEventListener("click",jogarTesoura)
function jogarTesoura(){ 

    var numeroAleatorio = Math.floor(Math.random() * 3) + 1 
    if (numeroAleatorio == 1){
        console.log("Perdeu")
        pedraM.classList.add('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')
        placarMaquina++
        document.getElementById('placarMaquina').innerHTML = `${placarMaquina}`
        
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    
    }
     else if(numeroAleatorio == 2){
        console.log("Ganhou")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.add('papelM-Atl')
        tesouraM.classList.remove('tesouraM-Atl')
        placarUsuario++
        document.getElementById('placarUsuario').innerHTML = `${placarUsuario}`

        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
        
    }
    else{
        console.log("Empatou")
        pedraM.classList.remove('pedraM-Atl')
        papelM.classList.remove('papelM-Atl')
        tesouraM.classList.add('tesouraM-Atl')
        if(placarUsuario == 2 && placarMaquina == 1){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarUsuario == 3 && placarMaquina == 0){
            console.log("Ganhou!")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Você ganhou! Parabéns!!!"
        } else if (placarMaquina == 2 && placarUsuario == 1){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        } else if (placarMaquina == 3 && placarUsuario == 0){
            console.log("Perdeu")
             tela.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
            tela.style.fontSize = "25px"
            tela.innerHTML = "Poxa. Você perdeu. Tente novamente!"
        }
    }
}

botao.addEventListener('click', reiniciar)

function reiniciar (){
    location.reload()
}
