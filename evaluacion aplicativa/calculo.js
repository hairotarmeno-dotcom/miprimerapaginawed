function calcularTotal() {
      let precios = document.querySelectorAll(".precio");
      let cantidad = parseInt(document.getElementById("cantidad").value);
      let precio = parseFloat(precios[0].textContent); // Ejemplo: toma el primer producto
      let total = precio * cantidad;
      document.getElementById("total").innerText = "Precio Total: $" + total;
    }

    function mostrarIDs() {
      let inputs = document.querySelectorAll(".input-text");
      let ids = "";
      inputs.forEach(i => ids += i.id + " ");
      document.getElementById("ids").innerText = "IDs: " + ids.trim();
    }

    function contarInputs() {
      let inputs = document.querySelectorAll(".input-text");
      document.getElementById("conteo").innerText = "Número de inputs: " + inputs.length;
    }

    function descuentoRecargo() {
      let inputs = document.querySelectorAll(".input-text");
      let cantidad = parseInt(document.getElementById("cantidad").value);
      let precios = document.querySelectorAll(".precio");
      let precio = parseFloat(precios[0].textContent); // Ejemplo: primer producto
      let total = precio * cantidad;

      let caracteres = 0;
      inputs.forEach(i => caracteres += i.value.length);

      if (caracteres > cantidad) {
        let descuento = total * 0.1;
        let final = total - descuento;
        document.getElementById("resultado").value = 
          "Descuento: $" + descuento + "\nTotal a pagar: $" + final;
      } else {
        let recargo = total * 0.05;
        let final = total + recargo;
        document.getElementById("resultado").value = 
          "Recargo: $" + recargo + "\nTotal a pagar: $" + final;
      }
    }