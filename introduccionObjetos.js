let dispositivo = {
    nombre:"gateway",
    nSerie: 123456,
    valor: 1500,
    direccionIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){
        this.estado=!this.estado,
        console.log(`Estado cambio: ${this.estado}`)

    }
}

dispositivo.valor=2500
console.log(dispositivo)

dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroSerie = dispositivo.nSerie
let nombreDispositivo = dispositivo.nombre

console.log(numeroSerie, nombreDispositivo)

//Extraer informacion de un objeto
//Destructuracion

let {nSerie,nombre} = dispositivo

console.log(nSerie,nombre)

let Equipo = {
    nombre:"Barcelona",
    golesaFavor:1,
    golesEnContra:3
}

//Forma1
let golesLocal = Equipo.golesaFavor
let golesVisitantes = Equipo.golesEnContra

console.log(golesLocal, golesVisitantes)

//Forma2
let{golesaFavor, golesEnContra} = Equipo;

  console.log(golesaFavor, golesEnContra)

  //arreglos
  let loteria = [32,69,47,69]

  console.log(loteria)
  //destructuracion
  let[,,ganador]=loteria
  console.log(ganador)
