var swiper=new Swiper(".swiper-container",{spaceBetween:30,effect:"fade",loop:!0,autoplay:{delay:4e3},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$('[data-fancybox="galeria"]').fancybox({transitionEffect:"circular",transitionDuration:900,buttons:["slideShow","fullScreen","thumbs","close"],lang:"es",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},es:{CLOSE:"Cerrar",NEXT:"Siguiente",PREV:"Anterior",ERROR:"Ha ocurrido un error inesperado <br/> :(",PLAY_START:"Reproducir",PLAY_STOP:"Parar",FULL_SCREEN:"Pantalla Completa",THUMBS:"Vorschaubilder",DOWNLOAD:"Descargar",SHARE:"Compartir",ZOOM:"Zoom"}}}),ScrollReveal().reveal(".bienvenido .main-text h3",{delay:500,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".bienvenido .main-text h2",{delay:700,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".bienvenido .main-text .btn-nosotros button",{delay:700,duration:2e3,reset:!1}),ScrollReveal().reveal(".info-menu .info-box h3",{delay:500,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".info-menu .info-box h2",{delay:700,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".info-menu .info-box .btn-nosotros a",{delay:700,duration:2e3,reset:!1}),ScrollReveal().reveal(".galeria .main-text h3",{delay:500,duration:2e3,reset:!1}),ScrollReveal().reveal(".galeria .main-text h2",{delay:700,duration:2e3,reset:!1}),ScrollReveal().reveal(".bg-hero .main-info h3",{delay:2200,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".bg-hero .main-info h1",{delay:2400,duration:2e3,origin:"bottom",distance:"1rem",reset:!1}),ScrollReveal().reveal(".main-carta h4",{delay:300,duration:1500,origin:"center",reset:!1}),ScrollReveal().reveal(" .lineas span:first-child",{delay:300,duration:2e3,origin:"left",distance:"100%",reset:!1}),ScrollReveal().reveal(" .lineas span:last-child",{delay:400,duration:2e3,origin:"right",distance:"100%",reset:!1}),$(document).ready(function(){setTimeout(function(){document.getElementById("preloader-container").style.opacity="0",document.getElementById("preloader-container").style.zIndex="-5"},2e3),$("a").on("click",function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&""!==this.hash){e.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},1200,function(){window.location.hash=a})}}),$(".btn-menu-mob").click(function(){$(this).toggleClass("open"),$(this).toggleClass("close"),$("header .container-nav").toggleClass("active")}),$("header .nav-box ul li a").click(function(){$("header .container-nav").toggleClass("active"),$("header .btn-menu-mob").toggleClass("open")})});