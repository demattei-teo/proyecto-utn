

 let navegation = document.getElementById("ctn-nav")

 nav = document.createElement("div");

 nav.innerHTML = `<div class="contenedor-header" data-aos="fade-down"  data-aos-duration="2000" >                            
                            <div id="refresh" class="animation-logo">
                               <a href="index.html">
                                <svg  width="120" height="70">
                                <rect x="45" y="5" width="60" height="35" rx="5" id="mon1" fill="#3F6797"></rect>
                                <rect x="50" y="10" width="50" height="25" rx="5" id="mon2" fill="#B1D5E4"></rect>
                                <polygon points="55 45 ,95 45,115 62,30 62" fill="#3F6797" id="tec1"></polygon>
                                <polygon points="57 48 ,92 48,104 58,43 58" fill="#B1D5E4" id="tec2"></polygon>
                                </svg>
                              </a>
                            </div>
                            <nav>
                                <ul>
                                   <li><a href="historia.html" class="nav-enlace">HISTORIA</a></li>
                                    <li><a href="juguemos.html" class="nav-enlace">JUGUEMOS</a></li>
         
                                 </ul>
                            </nav>

                        </div>`;
navegation.appendChild(nav) 

AOS.init();

/*video historia*/ 
setTimeout(()=>{
   duracion_video.innerHTML = `Duracion del video: ${video.duration.toFixed()} segundos`
   console.log(video.duration) 
  },1000)

let video = document.querySelector(".video");

let duracion_video = document.getElementById("duracion-video")

let button_iniciar = document.getElementById("button-iniciar").addEventListener("click",()=>{


video.play()

}
)
/*juguemos*/
let button_pausar = document.getElementById("button-pausar").addEventListener("click",()=>{

 video.pause()  
})
 


let button_retroceder = document.getElementById("button_retroceder").addEventListener("click",()=>{

   video.currentTime -=10;
})
let button_avanzar = document.getElementById("button_avanzar").addEventListener("click",()=>{
   video.currentTime +=10;
}) 



   

