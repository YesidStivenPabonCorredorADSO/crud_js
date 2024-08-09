import { documento,enviar } from "./modelo.js";
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

const listar = async()=>{
  const data=await solicitud('users');
  const documentos=await solicitud('documento');
  data.forEach(element => {
    let documento=documentos.find((doc)=> doc.input_id===element.id);
    $templete.querySelector("tr").id= `user_${element.id}`;
    $templete.querySelector(".first_name").textContent=element.nombre;
    $templete.querySelector(".last_name").textContent=element.apellido;
    $templete.querySelector(".address").textContent=element.direccion;
    $templete.querySelector(".type_id").textContent=documento.tipo_documento;
    $templete.querySelector(".docuement").textContent=element.documento;
    $templete.querySelector(".email").textContent=element.correo;
    $templete.querySelector(".edit").setAttribute("data-id",element.id);
    $templete.querySelector(".detele").setAttribute("data-id",element.id);
    let clone =document.importNode($templete,true);
    fragmento.appendChild(clone);
  });
  table.querySelector('tbody').appendChild(fragmento)
}
document.addEventListener("click",(e)=>{
  if (e.target.matches(".edit")|| e.target.matches(".edit *")) {
      element=e.target.matches(".edit")? e.target:e.target.parentNode;
      edit(e,element);
  }
  if(e.target.matches(".delete")||e.target.marches(".delete *")){

  }
})

// Formulario
const envio_form=(datos)=>{
  const{id,first_name,last_name,phone,address,type_id,docuement,email}=data;
  user.value=id;
  nombre.value=first_name;
  apellido.value=last_name;
  telofono.value=phone;
  direccion.value=address;
  tipo.value=type_id;
  documento.value=docuement;
  correo.value=address;
  politicas.cheched=true;
  send.removeAttribute("disable");


}

const createRow=async(datos)=>{
  const documentos=await solicitud("documents");
  const tr=tbody.insertRow(-1);
  const tb_Nombre=tr.insertCell(0);
  const tb_Apellido=tr.insertCell(1);
  const tb_Direccion=tr.insertCell(2);
  const tb_Tipo=tr.insertCell(3);
  const tb_Documentio=tr.insertCell(4);
  const tb_Email=tr.insertCell(5);
  const tb_Botonera=tr.insertCell(6);
  

  tb_Nombre=data.$input_name;
  tb_Apellido=data.$input_apellido;
  tb_Direccion=data.$input_direccion;
  tb_Tipo=data.$input_tipo;
  tb_Email=data.$input_correo;
  tb_Documentio=data.$input_document;

  tb_Nombre.classList.add()
}
const tr= document.querySelector(`#user_${id}`);
tr.querySelector(".first_name").textContent=first_name;
tr.querySelector(".last_name").textContent=last_name_name;
tr.querySelector(".address").textContent=address;
tr.querySelector(".type_id").textContent=documento.find((doc)=>doc.id===data.type_id).name;
tr.querySelector(".dni").textContent=dni;
tr.querySelector(".email").textContent=email
