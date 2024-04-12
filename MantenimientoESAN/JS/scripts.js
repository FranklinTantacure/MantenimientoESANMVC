/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    //
// Scripts
// 


    window.addEventListener('DOMContentLoaded', event => {

        // Toggle the side navigation
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
      
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
        }

    });

        

        /*PRIMER NAVEGADOR*/
        document.addEventListener("DOMContentLoaded", function () {
            const zoombleLink = document.getElementById('zoomble-primero');
            const arrowIcon = document.getElementById('arrow-icon_primero');

            if (zoombleLink) {
                const submenu = zoombleLink.nextElementSibling;

                if (submenu) {
                    zoombleLink.addEventListener('click', function (event) {
                        event.preventDefault();

                        // Obtener el estado computado de visualización del menú
                        const computedStyle = window.getComputedStyle(submenu);
                        const submenuDisplay = computedStyle.getPropertyValue('display');

                        if (submenuDisplay === 'block') {
                            submenu.style.display = 'none';
                            arrowIcon.classList.remove('ion-arrow-down-a'); // Cambiar la dirección de la flecha hacia abajo
                            arrowIcon.classList.add('ion-chevron-left'); // Cambiar la dirección de la flecha hacia la izquierda
                        } else {
                            submenu.style.display = 'block';
                            arrowIcon.classList.remove('ion-chevron-left'); // Cambiar la dirección de la flecha hacia la izquierda
                            arrowIcon.classList.add('ion-arrow-down-a'); // Cambiar la dirección de la flecha hacia abajo
                        }
                    });
                }
            }
        });






        /*Segundo NAVEGADOR*/
        document.addEventListener("DOMContentLoaded", function () {
            const zoombleLink = document.getElementById('zoomble-segundo');
            const arrowIcon = document.getElementById('arrow-icon_segundo');

            if (zoombleLink) {
                const submenus = zoombleLink.parentNode.querySelectorAll('.nav.nav-treeview');

                zoombleLink.addEventListener('click', function (event) {
                    event.preventDefault();

                    submenus.forEach(function (submenu) {
                        const computedStyle = window.getComputedStyle(submenu);
                        const submenuDisplay = computedStyle.getPropertyValue('display');

                        if (submenuDisplay === 'block') {
                            submenu.style.display = 'none';
                            arrowIcon.classList.remove('ion-arrow-down-a');
                            arrowIcon.classList.add('ion-chevron-left');
                        } else {
                            submenu.style.display = 'block';
                            arrowIcon.classList.remove('ion-chevron-left');
                            arrowIcon.classList.add('ion-arrow-down-a');
                        }
                    });
                });

                // Agregar funcionalidad para los enlaces de los submenús
                submenus.forEach(function (submenu) {
                    const links = submenu.querySelectorAll('.etiqueta');
                    links.forEach(function (link) {
                        link.addEventListener('click', function (event) {
                            // Aquí puedes agregar la lógica para manejar el clic en cada enlace
                            console.log("Link clicked: " + link.textContent.trim());
                        });
                    });
                });
            }
        });




        /*Tercer NAVEGADOR*/
        document.addEventListener("DOMContentLoaded", function () {
            const zoombleLink = document.getElementById('zoomble-tercero');
            const arrowIcon = document.getElementById('arrow-icon_tercero');

            if (zoombleLink) {
                const submenu = zoombleLink.nextElementSibling;

                if (submenu) {
                    zoombleLink.addEventListener('click', function (event) {
                        event.preventDefault();

                        // Obtener el estado computado de visualización del menú
                        const computedStyle = window.getComputedStyle(submenu);
                        const submenuDisplay = computedStyle.getPropertyValue('display');

                        if (submenuDisplay === 'block') {
                            submenu.style.display = 'none';
                            arrowIcon.classList.remove('ion-arrow-down-a'); // Cambiar la dirección de la flecha hacia abajo
                            arrowIcon.classList.add('ion-chevron-left');
                        } else {
                            submenu.style.display = 'block';
                            arrowIcon.classList.remove('ion-chevron-left');
                            arrowIcon.classList.add('ion-arrow-down-a'); // Cambiar la dirección de la flecha hacia la izquierda
                        }
                    });
                }
            }
        });





// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()



document.addEventListener("DOMContentLoaded", function () {
    var url = window.location.href;
    var valor = url.substring(url.lastIndexOf('/') + 1);

    if (valor == 1) {
        var mensajeElement = document.getElementById("mensajeid");
        mensajeElement.innerText = "Usuario o contraseña incorrecta (ponerse en contacto con el Administrador)";
        mensajeElement.style.display = 'block'; // Mostrar el mensaje
    }

    console.log(valor); // Esto mostrará '1' en la consola del navegador
});







