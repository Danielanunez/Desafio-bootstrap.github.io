const boton = document.getElementById("buttom-resumen");
const formulario = document.getElementById("formulario");

boton.addEventListener("click", () => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const cantidad = document.getElementById("cantidad").value;
        const categoria = document.getElementById("categoria").value;
        const total = document.getElementById("total-span");
        var tickets = cantidad * 200;
        switch (categoria) {
            case "1":
                var resultado = (tickets * 80) / 100;
                break;
            case "2":
                var resultado = (tickets * 50) / 100;
                break;
            case "3":
                var resultado = (tickets * 15) / 100;
                break;
        }
        total.textContent = `$ ${resultado}`;
    })
});

