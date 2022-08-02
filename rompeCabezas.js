

imagen1 = document.getElementById("imagen1"),
imagen2 = document.getElementById("imagen2"),
imagen3 = document.getElementById("imagen3")
array=[imagen1,imagen2,imagen3]


function rompeCabezas() {

   
for (let i = 0; i < array.length; i++) {

    array[i].addEventListener("dragstart", inicio ,false);
   
}
function inicio (event) {

     DataImages = event.target
        
    console.log(DataImages)
    }
    


arrastrar1 = document.getElementById("arrastrar_1");

arrastrar1.addEventListener("draenter",(e)=>{
console.log(DataImages) 
})

arrastrar1.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
arrastrar1.addEventListener("drop",()=>{
 if (arrastrar1.hasChildNodes() == 0) {
  arrastrar1.appendChild(DataImages);
  
 }else{
    console.log("bloque completo, intente en otro")
 }   
}, false);



arrastrar2 = document.getElementById("arrastrar_2");



arrastrar2.addEventListener("dragenter",(e)=>{
  console.log(DataImages)  
})
arrastrar2.addEventListener("dragover",(e)=>{
    e.preventDefault()

})
arrastrar2.addEventListener("drop", ()=>{
    if (arrastrar2.hasChildNodes() ==0) {
      arrastrar2.appendChild(DataImages) 
       
    }else{
      console.log("bloque completo, intente en otro")
    }
}, false);



arrastrar3 = document.getElementById("arrastrar_3");



arrastrar3.addEventListener("dragenter",(e)=>{
    console.log(DataImages)  
})
arrastrar3.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
arrastrar3.addEventListener("drop", ()=>{
  if (arrastrar3.hasChildNodes() == 0) {
    arrastrar3.appendChild(DataImages) 
  }else{

    console.log("bloque completo, intente en otro");
  }  
}, false);

}

rompeCabezas()




let reiniciar = document.getElementById("reiniciar").addEventListener("click",()=>{
  location.reload()
})
