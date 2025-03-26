function mate1() {
  var mate = document.getElementById("matematica").value;
  console.log(mate);
  if (mate >= 0 && mate <= 10) {
    document.getElementById("texto").innerText = "Correcto";
    document.getElementById("texto").classList.add("oka");
  } else {
    document.getElementById("texto").innerText = "Ingrese una nota valida";
    document.getElementById("texto").classList.remove("oka");
  }
  if (document.getElementById("matematica").value.length <= 0) {
    alert("No ingreso nada");
    document.getElementById("texto").innerText = "";
  }
}

function lengua1() {
  var lengua = document.getElementById("lengua").value;
  if (lengua >= 0 && lengua <= 10) {
    document.getElementById("texto2").innerText = "Correcto";
    document.getElementById("texto2").classList.add("oka");
  } else {
    document.getElementById("texto2").innerText = "Ingrese una nota valida";
    document.getElementById("texto2").classList.remove("oka");
  }
  if (document.getElementById("lengua").value.length <= 0) {
    alert("No ingreso nada");
    document.getElementById("texto2").innerText = "";
  }
}

function efsi1() {
  var efsi = document.getElementById("efsi").value;
  if (efsi >= 0 && efsi <= 10) {
    document.getElementById("texto3").innerText = "Correcto";
    document.getElementById("texto3").classList.add("oka");
  } else {
    document.getElementById("texto3").innerText = "Ingrese una nota valida";
    document.getElementById("texto3").classList.remove("oka");
  }
  if (document.getElementById("efsi").value.length <= 0) {
    alert("No ingreso nada");
    document.getElementById("texto3").innerText = "";
  }
}

function calcularPromedio() {

  var mate = parseInt(document.getElementById("matematica").value);
  var lengua = parseInt(document.getElementById("lengua").value);
  var efsi = parseInt(document.getElementById("efsi").value);

  if (document.getElementsByClassName("oka").length == 3) {
    document.getElementById("promedio").innerText = "";
    var promedio = (mate + lengua + efsi) / 3;
    if (promedio >= 6) {
      document.getElementById("promedio").innerText =
        "Su promedio es: " + promedio;
    } else {
      document.getElementById("promedio").innerText =
        "su promedio es: " + promedio;
    }
  } else {
    alert("ERROR: Ingrese notas validas para poder calcular su promedio");
  }
}
function mostrarMateriaMayor() {
    var mate = parseInt(document.getElementById("matematica").value);
    var lengua = parseInt(document.getElementById("lengua").value);
    var efsi = parseInt(document.getElementById("efsi").value);
  
    if (document.getElementsByClassName("oka").length == 3)
    {
        if(mate>lengua && mate>efsi)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en matematica"
        }
        else if(lengua>mate && lengua>efsi)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en lengua"
        }
        else if(efsi>lengua && efsi>mate)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en EFSI"
        }
        else if(mate==lengua && mate>efsi)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en matematica y lengua"
        }
        else if(mate==efsi && mate>lengua)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en matematica y EFSI"
        }
        else if(efsi==lengua && efsi>mate)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en EFSI y lengua"
        }
        else if(mate==lengua && mate==efsi)
        {
            document.getElementById("materiaMayor").innerText =
        "La mayor nota es en matematica, EFSI y lengua"
        }
    }
  else {
    alert("ERROR: Ingrese notas validas para poder calcular su promedio");
  }
}
