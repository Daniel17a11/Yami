document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("whatsapp-btn");

    if (boton) {
        boton.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace intente navegar a "#"

            let mensaje = "💛 💛 Hoy te envío este detalle mi porque eres mi sol y mi niña.  🌼✨\n\nMira esta sorpresa: https://daniel17a11.github.io/Yami/";
            let numero = "50236825846"; // Reemplaza con el número real (sin '+')

            if (numero === "521XXXXXXXXXX") {
                alert("⚠️ Debes cambiar el número en script.js antes de enviar el mensaje.");
                return;
            }

            let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña
        });
    } else {
        console.error("⚠️ No se encontró el botón con ID 'whatsapp-btn'. Verifica tu HTML.");
    }
});


