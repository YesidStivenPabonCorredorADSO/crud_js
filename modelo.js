export const documento=async(id)=>{
   const data=await fetch(`http://localhost:3000/document/${id}`);
   const dato= await data.json();
   return dato

}
export const enviar= async(datos) =>{
    fetch('http://localhost:3000/user', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
export const listar=async()=>{
  const data=await fetch("http://localhost:3000/user");
  const dato=await data.json();
  return dato
}
export const eliminar=async(id)=>{
  const data= await fetch(`http://localhost:3000/user/${id}`)
  
}