import { documento,enviar } from "/modelo.js";
async function llamar() {
  const datos =await fetch("http://localhost:3000/document");
  const parsiar =await datos.json();
  // console.log(parsiar)
  // parsiar.forEach(element => {
  //   const $opcitio = document.createElement("option");
  //   $select.appendChild($opcitio)
  //   $opcitio.innerText=element.name

  // });
}
const $select = document.querySelector("#Tipo-doc");
const $form = document.querySelector("#formulario");
const $input_id = document.querySelector("#id");
const $input_name = document.querySelector("#name");
const $input_apellido = document.querySelector("#apellido");
const $input_document = document.querySelector("#documento");
const $input_correo = document.querySelector("#correo");
const $input_tipo=document.querySelector('#Tipo-doc');
const $input_direccion = document.querySelector("#direccion");

const validacion = (event) => {
  event.preventDefault();
  let input_id = $input_id.value.trim();
  let input_name = $input_name.value.trim();
  let input_apellido = $input_apellido.value.trim();
  let input_document = $input_document.value.trim();
  let input_correo = $input_correo.value.trim();
  let input_tipo= $input_tipo.value.trim();
  let input_direccion = $input_direccion.value.trim();
  let id;
  console.log(input_tipo)
  if(input_tipo == "T.I"){
    id= 1;
  }
  if(input_tipo =="C.C"){
    id=2
  }
  documento(id)
    .then((reponse)=>{
      console.log(reponse)
      const datos={
        nombre: input_name,
        apellido: input_apellido,
        documento: input_document,
        correo:input_correo,
        tipo:input_tipo,
        direccion:input_direccion,
      }
      enviar(datos)
    })
  if (input_id===""|| input_name===""||input_apellido===""||input_document===""||input_correo===""||input_direccion==="") {
    alert("Error: Por favor llene los campos")
  }
  else if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test($input_correo.value)) {
    alert("El correo Valido")
  }

}
$form.addEventListener("submit", validacion)

llamar()


