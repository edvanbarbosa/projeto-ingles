const elemento = (element) => document.querySelector(element)

const verb = elemento(".verb")
const Past = elemento("#past")
const Participle = elemento("#participle")
const Translate = elemento("#translate")
const btn = elemento("button")

const rPastp = elemento(".past-player")
const rPastv = elemento(".past-verb")
const rPartp = elemento('.participle-player')
const rPartv = elemento('.participle-verb')
const rTradup = elemento('.translate-player')
const rTraduv = elemento('.translate-verb')


const getVerb = () => {
    fetch("irregular-verbs.json").then((response) => {
        response.json().then((Verbs) => {


            const comparar = (vl) =>{
                if(Past.value.length > 0){
                    if(Past.value.toUpperCase().replace(" ",'') == vl.Passado.toUpperCase()){
                        Past.style.background = "#58ff95"
                        rPastp.style.color = "#58ff95"
                    }
                    else{
                        Past.style.background = "#ff5858"
                        rPastp.style.color = "#ff5858"
                    }
                }
                if(Participle.value.length > 0){
                    if(Participle.value.toUpperCase().replace(" ",'') == vl.Particípio.toUpperCase()){
                        Participle.style.background = "#58ff95"
                        rPartp.style.color = "#58ff95"
                    }
                    else{
                        Participle.style.background = "#ff5858"
                        rPartp.style.color = "#ff5858"
                    }
                }
               if(Translate.value.length > 0){
                if(typeof(vl.Tradução) == "object"){
                    
                    if( vl.Tradução.includes((Translate.value.replace(Translate.value[1],Translate.value[1].toUpperCase())).replace(Translate.value[0],''))== true){
                        Translate.style.background = "#58ff95"
                        rTradup.style.color = "#58ff95"
                    }
                    else{
                        Translate.style.background = "#ff5858"
                        rTradup.style.color = "#ff5858" 
                    }
                }
                if(typeof(vl.Tradução) == "string"){
                    
                    if(Translate.value.toUpperCase().replace(" ","") == vl.Tradução.toUpperCase()){
                        Translate.style.background = "#58ff95"
                        rTradup.style.color = "#58ff95"
                    }
                    else{
                        Translate.style.background = "#ff5858"
                        rTradup.style.color = "#ff5858"
                    }
    
                }
               }
                

                
            }

            const resut = (vl)=>{
                rPastp.innerHTML = Past.value
                rPastv.innerHTML = vl.Passado
                rPartp.innerHTML = Participle.value
                rPartv.innerHTML = vl.Particípio
                rTradup.innerHTML = Translate.value
                rTraduv.innerHTML = vl.Tradução
            }
            
            let cont = 0
            let randomVerb = Math.floor(Math.random() * Verbs.Verbs.length)
            btn.addEventListener('click',()=>{
                
                const vl =  Verbs.Verbs[randomVerb].verb
                if(cont % 2 == 0){
                    
                    verb.innerHTML = vl.Infinitivo
                    btn.innerHTML = "Submit"
                    Past.value = " "
                    Participle.value = " "
                    Translate.value = " "
                    rPartp.innerHTML = rPartv.innerHTML =rPastp.innerHTML = rPastv.innerHTML = rTradup.innerHTML = rTraduv.innerHTML = ''

                }
                if(cont %2 == 1){
                   
                    randomVerb =Math.floor(Math.random() * Verbs.Verbs.length)
                    comparar(vl)
                    resut(vl)
                    
                    btn.innerHTML = "Restart"

                    
                    
                   
                }
                cont += 1
            
            })

            
            
        })
    })

}
getVerb()
