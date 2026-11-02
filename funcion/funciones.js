// -----------------------------------------------------------
// Mensajes
const msj1 = document.getElementById("msj1");
if (msj1){
    msj1.innerHTML = `
        <h3 class="titulo-msj1">Bienvenido <br> Restaurante Pargo Rojo</h3>
        <p class="texto-msj1">
        <br><br> Le ofrecemos una experiencia gastronómica centrada en la cocina tradicional con ingredientes de calidad especializándonos en pescado y marisco fresco. 
        Nuestros platos reflejan la autenticidad y el sabor del mar.
        </p>
    `;
}
const msj2 = document.getElementById("msj2");
if (msj2){
    msj2.innerHTML = "Restaurante Pargo Rojo: Tradición, pasión y frescura en cada plato, para ofrecerle una experiencia única y memorable.";
}
const msj3 = document.getElementById("msj3");
if (msj3){
    msj3.innerHTML = "Es un verdadero placer recibirle <br>Nuestra carta combina frescura, tradición y creatividad para brindarle una experiencia que invita a volver";
}
const msj5 = document.getElementById("msj5");
if (msj5){
    msj5.innerHTML = "";
}
const msj6 = document.getElementById("msj6");
if (msj6){
    msj6.innerHTML = "Agradecemos de corazón que haya elegido nuestro restaurante para disfrutar de los sabores del océano.<br>Seguimos trabajando con pasión para ofrecerle calidad y frescura. Esperamos verle pronto nuevamente.";
}
const msj7 = document.getElementById("msj7");
if (msj7){
    msj7.innerHTML = "Gracias por interesarse en nuestra carta y permitirnos presentarle una muestra de nuestra pasión por el mar.<br><br>Cada plato refleja nuestra pasión por el mar, con calidad, frescura y una experiencia que va más allá del sabor.";
}
const msj8 = document.getElementById("msj8");
if (msj8){
    msj8.innerHTML = "cuadro bacano para informacion del restuarante.";
}
const msj10 = document.getElementById("msj10");
if (msj10){
    msj10.innerHTML = "primer cuadro";
}
const msj12 = document.getElementById("msj12");
if (msj12) {
    msj12.innerHTML = `
        <h3 class="titulo-msj12">Nuestra propuesta gastronómica</h3>
        <p class="texto-msj12">
        Nuestra cocina se inspira en los sabores del mar Caribe, donde cada plato refleja tradición, pasión y conexión con la cultura costera. Seleccionamos pescados y mariscos frescos del día, provenientes de pescas sostenibles, para resaltar el sabor natural de cada ingrediente mediante técnicas tradicionales con un toque contemporáneo.
        <br><br>
        Más que una comida, ofrecemos una experiencia que rinde homenaje a nuestras raíces, fusionando tradición e innovación. Buscamos que cada comensal disfrute un momento inolvidable donde la frescura, el sabor y la calidez sean los verdaderos protagonistas.
        </p>
    `;
}
const msj14 = document.getElementById("msj14");
if (msj14) {
  msj14.innerHTML = 
  `<span style="font-weight: 700;">
      Una historia de tradición y pasión.
    </span>
    <br><br>
    <span >
      Es un honor para mí contarles un poco sobre la historia de nuestro restaurante. <br><br>
      Cada plato es una historia, un homenaje a nuestros orígenes y al rico patrimonio culinario que hemos cultivado a lo largo de los años. <br><br>
      Nos esforzamos por utilizar siempre los ingredientes más frescos y de mayor calidad, especialmente cuando se trata de pescados y mariscos, el corazón y el alma de nuestra cocina. <br><br>
      Ofrecemos un servicio amable y personalizado, convirtiendo cada visita en una experiencia memorable. También nos enorgullecemos de nuestra carta seleccionada para complementar a la perfección nuestros platos. <br><br>
      Gracias por ser parte de nuestra historia y permitirnos seguir compartiendo con ustedes lo mejor de nuestra tradición culinaria.
    </span>`;
}
const msj15 = document.getElementById("msj15");
if (msj15){
    msj15.innerHTML = `
        <p class="texto-msj15">
            Disfrute de nuestra cocina tradicional con los mejores pescados y mariscos preparados con excelencia.
        </p>
    `;
}
const msj16 = document.getElementById("msj16");
if (msj16){
    msj16.innerHTML = "segundo cuadro";
}
const msj17 = document.getElementById("msj17");
if (msj17){
    msj17.innerHTML = "tercer cuadro";
}
const msj18 = document.getElementById("msj18");
if (msj18){
    msj18.innerHTML = "ultimo mensaje de la pagina de inicio.";
}
const msj24 = document.getElementById("msj24");
if (msj24){
    msj24.innerHTML = "imagen logo-1";
}
const msj25 = document.getElementById("msj25");
if (msj25){
    msj25.innerHTML = "imagen logo-2";
}
// -----------------------------------------------------
// Movimiento infinito imagenes contenedor45,46 (suave)
function carrusel(contenedorClase, tiempo = 5000) {
    const contenedor4546 = document.querySelector(contenedorClase);
    if (!contenedor4546) return;

    const imagenes4546 = contenedor4546.querySelectorAll("img");
    let indice = 0;

    // Activar solo la primera imagen
    imagenes4546.forEach(img => img.classList.remove("activa"));
    imagenes4546[0].classList.add("activa");

    setInterval(() => {
        imagenes4546[indice].classList.remove("activa");
        indice = (indice + 1) % imagenes4546.length;
        imagenes4546[indice].classList.add("activa");
    }, tiempo);
}
// Activar carruseles
carrusel(".contenedor45", 5000);
carrusel(".contenedor46", 5000);
// -----------------------------------------------------
// Desplazamiento de imagen - contenedor 14
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item-galeria");

    // si no existe la galería, salir
    if (items.length === 0) return;

    // imagen del centro inicial = segunda imagen
    let index = 1;

    function actualizarGaleria() {
        items.forEach(item =>
            item.classList.remove("prev", "activo", "next")
        );

        // Centro
        items[index].classList.add("activo");

        // Derecha
        if (index + 1 < items.length) {
            items[index + 1].classList.add("next");
        }

        // Izquierda
        if (index - 1 >= 0) {
            items[index - 1].classList.add("prev");
        }
    }

    actualizarGaleria();

    setInterval(() => {
        index = (index + 1) % items.length;
        actualizarGaleria();
    }, 3000);
});
// ---------------------------------------------------------------
/* Desplazamiento de imagen - contenedor 61 */
const images61 = document.querySelectorAll(".contenedor61 .desplzar-imagen");
let index61 = 0;
// Solo continuar si hay imágenes
if (images61.length > 0) {
    // Inicializar mostrando solo la primera
    images61.forEach((img, i) => {
        img.style.display = i === 0 ? "block" : "none";
    });
    // Botón siguiente
    const btnNext61 = document.getElementById("btn-next-contenedor61");
    if (btnNext61) {
        btnNext61.addEventListener("click", () => {
            images61[index61].style.display = "none";
            index61 = (index61 + 1) % images61.length;
            images61[index61].style.display = "block";
        });
    }
    // Botón anterior
    const btnPrev61 = document.getElementById("btn-prev-contenedor61");
    if (btnPrev61) {
        btnPrev61.addEventListener("click", () => {
            images61[index61].style.display = "none";
            index61 = (index61 - 1 + images61.length) % images61.length;
            images61[index61].style.display = "block";
        });
    }
} else {
    console.warn("No se encontraron imágenes con la clase '.desplzar-imagen' dentro de '.contenedor61'.");
}
// -----------------------------------------------------------
// Mostrar botón para subir la pagina 
// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    const btnSubir = document.getElementById("subir-arriba");
    if (btnSubir) {
        // Mostrar / ocultar según el desplazamiento
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                btnSubir.style.display = "block";
            } else {
                btnSubir.style.display = "none";
            }
        });
        // Subir suavemente
        btnSubir.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.warn("El botón 'subir-arriba' no existe en esta página.");
    }
});
// -----------------------------------------------------------
// Presentacion de los contenedores al observar el contenedor.
document.addEventListener("DOMContentLoaded", () => {
    const contenedores = document.querySelectorAll(".contenedor57, .contenedor58");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.3 });

    contenedores.forEach(c => observer.observe(c));
});
// -----------------------------------------------------------
/* Botones para contenedor 37 */
/* Índice del slide actual */
let currentSlide = 0;

/* Flags de control */
let firstSlideAnimated = false;
let firstSlidePassed = false;

/* Elementos */
const slides37 = document.querySelectorAll('.slide');
const btnPrev37 = document.getElementById('btn-prev-contenedor37');
const btnNext37 = document.getElementById('btn-next-contenedor37');
const contenedor70 = document.querySelector('.contenedor70');
const textoInferior37 = document.getElementById('texto-slide-inferior2');

/* VALIDACIÓN */
if (slides37.length > 0 && contenedor70 && textoInferior37) {

    /* Actualiza el texto */
    function actualizarTexto(index) {
        const texto = slides37[index].getAttribute('data-texto');
        textoInferior37.textContent = texto ? texto : '';
    }

    /* Muestra slide */
    function showSlide(index) {
        slides37.forEach((slide, i) => {
            slide.classList.remove('activo', 'animar');
            if (i === index) slide.classList.add('activo');
        });
        actualizarTexto(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides37.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides37.length) % slides37.length;
        showSlide(currentSlide);
    }

    if (btnNext37) btnNext37.addEventListener('click', nextSlide);
    if (btnPrev37) btnPrev37.addEventListener('click', prevSlide);

    const observer37 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !firstSlideAnimated) {

                firstSlideAnimated = true;
                slides37[0].classList.add('activo', 'animar');
                actualizarTexto(0);

                setTimeout(() => {
                    if (!firstSlidePassed) {
                        firstSlidePassed = true;
                        nextSlide();
                    }
                }, 5000);

                observer37.disconnect();
            }
        });
    }, { threshold: 0.4 });

    observer37.observe(contenedor70);
    showSlide(0);
}
// -----------------------------------------------------------
/* Slider contenedor 38 con texto inferior */
document.addEventListener("DOMContentLoaded", function () {

    const slides38 = document.querySelectorAll(".contenedor38 .slide2");
    const btnPrev38 = document.getElementById("btn-prev-contenedor38");
    const btnNext38 = document.getElementById("btn-next-contenedor38");
    const textoInferior38 = document.getElementById("texto-slide-inferior");

    if (slides38.length === 0 || !textoInferior38) return;

    let indiceActual = 0;

    function mostrarSlide(indice) {
        slides38.forEach(slide => slide.classList.remove("activo"));
        slides38[indice].classList.add("activo");

        const texto = slides38[indice].dataset.texto;
        textoInferior38.textContent = texto ? texto : "";
    }

    mostrarSlide(indiceActual);

    if (btnNext38) {
        btnNext38.addEventListener("click", () => {
            indiceActual = (indiceActual + 1) % slides38.length;
            mostrarSlide(indiceActual);
        });
    }

    if (btnPrev38) {
        btnPrev38.addEventListener("click", () => {
            indiceActual = (indiceActual - 1 + slides38.length) % slides38.length;
            mostrarSlide(indiceActual);
        });
    }
});
// -----------------------------------------------------
// Carrusel contenedor52 con botones
document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".contenedor52 .contenedor16");
    const prev = document.querySelector(".prev52");
    const next = document.querySelector(".next52");

    if(items.length === 0) return;

    let index = 0;
    const total = items.length;

    function actualizar(){

        items.forEach(el=>{
            el.classList.remove("activo","left","right");
        });

        let left = (index - 1 + total) % total;
        let right = (index + 1) % total;

        items[index].classList.add("activo");
        items[left].classList.add("left");
        items[right].classList.add("right");
    }

    prev.addEventListener("click",()=>{
        index = (index - 1 + total) % total;
        actualizar();
    });

    next.addEventListener("click",()=>{
        index = (index + 1) % total;
        actualizar();
    });

    actualizar();

});
// -----------------------------------------------------------
// Tema oscuro
document.addEventListener("DOMContentLoaded", () => {

    const botonOscuro = document.getElementById("id-oscuro");

    // Cargar estado guardado
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        document.body.classList.add("tema-oscuro");
    }

    if (!botonOscuro) return;

    // Ajustar texto inicial del botón
    botonOscuro.textContent = document.body.classList.contains("tema-oscuro")
        ? "Tema Claro"
        : "Tema Oscuro";

    botonOscuro.addEventListener("click", () => {

        document.body.classList.toggle("tema-oscuro");

        const esOscuro = document.body.classList.contains("tema-oscuro");

        // Guardar preferencia
        localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");

        // Actualizar texto del botón
        botonOscuro.textContent = esOscuro
            ? "Tema Claro"
            : "Tema Oscuro";
    });
});
// -----------------------------------------------------------

/* =========================================
   CALIFICACIONES GOOGLE - PARGO ROJO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const estrellas = document.querySelectorAll(
        "#estrellas-calificacion .estrella"
    );

    const mensaje = document.getElementById(
        "mensaje-calificacion"
    );

    const contenedorEstrellas = document.getElementById(
        "estrellas-calificacion"
    );

    // Verificar que estamos en la página correcta.
    if (!estrellas.length || !mensaje || !contenedorEstrellas) {
        return;
    }

    // Enlace actual de Google Maps del restaurante.
    const enlaceGoogle =
        "https://maps.app.goo.gl/fz3Ybj3eZXVNAN8G8";

    let calificacionSeleccionada = 0;

    const mensajes = {
        1: "😞 ¡Lamentamos que tu experiencia no haya sido buena!",
        2: "😕 Gracias por tu opinión. Podemos mejorar.",
        3: "🙂 ¡Gracias! Seguiremos trabajando para mejorar.",
        4: "😊 ¡Nos alegra que hayas disfrutado tu experiencia!",
        5: "🤩 ¡Excelente! ¡Muchas gracias por calificarnos!"
    };

    // Actualizar las estrellas visualmente.
    function actualizarEstrellas(valor) {

        estrellas.forEach(estrella => {

            const numero = Number(estrella.dataset.valor);

            estrella.classList.toggle(
                "activa",
                numero <= valor
            );

            estrella.setAttribute(
                "aria-pressed",
                numero === calificacionSeleccionada
                    ? "true"
                    : "false"
            );

        });

    }

    // Seleccionar estrellas y abrir Google inmediatamente.
    estrellas.forEach(estrella => {

        estrella.addEventListener("click", () => {

            calificacionSeleccionada = Number(
                estrella.dataset.valor
            );

            actualizarEstrellas(calificacionSeleccionada);

            mensaje.textContent =
                mensajes[calificacionSeleccionada];

            // Redirigir inmediatamente a Google Maps.
            window.open(
                enlaceGoogle,
                "_blank",
                "noopener,noreferrer"
            );

        });

        // Efecto visual al pasar el cursor.
        estrella.addEventListener("mouseenter", () => {

            actualizarEstrellas(
                Number(estrella.dataset.valor)
            );

        });

    });

    // Restaurar las estrellas al retirar el cursor.
    contenedorEstrellas.addEventListener("mouseleave", () => {

        actualizarEstrellas(calificacionSeleccionada);

    });

});

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------





















