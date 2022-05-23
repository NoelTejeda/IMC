//JS:diferentesAlert
//funciones de sweet alert (https://www.youtube.com/watch?v=NDASIexWyhU)
swal.fire({ 

    title: "Bienvenido",
    //text:'Selecciona tu pais',
    // html:'<bclass="rojo">Hola!</b>'
    icon:'success',
    //entre los diferentes iconos se pueden usar: question, warning, error, success
    
    confirmButtonText: "Continuar",
    // footer:
    width: '20%',
    // padding:
    background:'yellow',
    // grow:
    //grow es para indicar el tamaño del alerta: fullscreen (pantalla completa),column (largo completo), row(fila completa)
    
    //backdrop:
    timer:3000,
    //timer le indicamos el tiempo en que se cerrará el alert 2000mls=2segundos
    timerProgressBar:true,
    //timerProgressBar sale una barrita de carga debajo del alert

    // toast:
    //toast se coloca true y se coloca un alert muy reducido.
    
    // position:las opciones son top,end,bottom,center(por defecto), top-end,botom-end

   /*  allowoutsideClick:false,
    //permitir hacer click afuera del alert para cerrar.
    allowEscapeKey:false,
    //permitir con scape cerrar el alert.
    allowEnterkey:false,
    //permitir con enter cerrar el alert.
    stopkeydownPropagation:false, */

    //----------------------------------------------------------------
    
    //Input:
    //inputPlaceholder:
    // inputValue:
    // input options:
    
    //----------------------------------------------------------------


    showConfirmButton:false
    // confirmButton Color:
    //confirmButtonArtaLabel://
    // showCancelButton:
    // cancelButtonText:
    // cancelButtonColor:
    // cancelButtonArlaLabel:
    // buttons Styling:
    // showCloseButton:
    // closeButtonArtaLabel:
    // tmageUrl:
    // imagewidth:
    // imageHeight:
    // imageAlt:





});