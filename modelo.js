
export const documento=async(id)=>{
   const data=await fetch(`http://localhost:3000/document/${id}`);
   const dato= await data.json();
   return dato

}
export const enviar= async datos =>{
  const data=await fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}


const edit=(event,elemnt)=>{
  enviar(`users/${elemnt.dataset.id}`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json; charsert=UTF-8",
    },
  }).then((data)=>{
    loadForm(data);
    toggleModal();
  })
}
const deletedata=(event,elemnt)=>{
  const tr=elemnt.parentNode.parentNode.parentNode;
  if (confirm("¿Desea eliminar el registro?")) {
    enviar(`users/${elemnt.dataset.id}`,{
      method:"DELETE",
      headers:{
        "Content-type":"application/json; charsert=UTF-8",
      },
    }).then((data)=>{
      alert(`El usuario ${data.first_name} fue eliminado con exit`);
      tr.remove();
    })
  }
}