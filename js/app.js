

//------------------POPUP-----------------

const abrir = document.querySelector('#abrir');
const ventana = document.querySelector('.popup');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    ventana.classList.add('evento');
});

cerrar.addEventListener('click', () => {
    ventana.classList.remove('evento');
});


 const contacto = document.querySelector('#contacto');
 const ventanaContacto = document.querySelector('.ventana-2');
 const cerrarVentana = document.querySelector('#cerrarVentana');

 contacto.addEventListener('click', () => {
    ventanaContacto.classList.add('abrirVentana');
 });

 cerrarVentana.addEventListener('click', () => {
    ventanaContacto.classList.remove('abrirVentana');
 });

 const cancelar = document.querySelector('#cerrarVentana');

cancelar.addEventListener('click', () => {
    swal.fire({
        title: '¿Seguro qué quieres cancelar tu pedido?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Regresar',
        cancelButtonText: 'Sí, cancelar',
        allowOutsideClick: false,
        buttons: {
            extraButton: {
              text: 'Botón Extra',
              value: 'extra',
              className: 'custom-extra-button',
            },
          },
    }).then((result) => {
        if (result.isDismissed) {
            window.history.back();
          } else {
            ventanaContacto.classList.add('abrirVentana');
          }
      });
});

const enviar = document.querySelector('#enviar');

enviar.addEventListener('click', () => {
    swal.fire({
        title: '¡Correo enviado exitosamente!',
        icon: 'success'
    });
    ventanaContacto.classList.remove('abrirVentana');
});
//----------------------Alertas---------------------

const comprarCarrito = document.querySelector('#comprarCarrito');

comprarCarrito.addEventListener('click', () => {
    swal.fire({
        title: '¡Compra exitosa!',
        icon: 'success'
    });
    ventana.classList.remove('evento');

});

const error = document.querySelector('#error');

error.addEventListener('click', () => {
    swal.fire({
        title: '¡Aun no tienes favoritos!',
        icon: 'error'
    });
});





/*
const comprar = document.querySelectorAll(".favorito");
comprar.forEach(agregarFunda => {
    agregarFunda.addEventListener("click", agregarCarrito);
});

function agregarCarrito(event) {
    const boton = event.target;
    const tarjeta= boton.closest('.tarjeta');

    const precioFunda = tarjeta.querySelector('.precio').textContent;
    const imagenFunda = tarjeta.querySelector('.funda-imagen').src;

    agregarArticulo(precioFunda, imagenFunda);
}

function agregarArticulo(precioFunda, imagenFunda){
    const filaCarrito = document.createElement('div');
}

*/