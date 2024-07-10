import { documento,enviar,listar,eliminar } from "/modelo.js";
const $framento= document.createDocumentFragment();
const $tabla=document.querySelector('#tabla1');
 function lista() {
    const $tr=document.createElement('tr');
    const $td=document.createElement('td');
    // const $nombre=document.createElement('td');
    // const $apellido=document.createElement('td');
    // const $documento=document.createElement('td');
    // const $tipo_document=document.createElement('td');
    // const $correo=document.createElement('td');
    // const $direccion=document.createElement('td')
    // const $botton1=document.createElement('button');
    // const $botton2=document.createElement('button');



    $tr.appendChild($td);
    // $tr.appendChild($nombre);
    // $tr.appendChild($apellido);
    // $tr.appendChild($documento);
    // $tr.appendChild($tipo_document)
    // $tr.appendChild($correo);
    // $tr.appendChild($direccion);
    // $tr.appendChild($botton1);
    // $tr.appendChild($botton2);
    $framento.appendChild($tr);
    
    $tabla.appendChild($framento);
}
lista()




   

    // ------------------------------------------
    
    // $framento.appendChild('tbody');
    // $tabla.appendChild($tr);
    // $tr.appendChild('td')
    // $tabla.appendChild($id);
    // $tabla.appendChild($nombre);
    // $tabla.appendChild($apellido)
    // $tabla.appendChild($documento)
    // $tabla.appendChild($tipo_document)
    // $tabla.appendChild($correo)
    // $tabla.appendChild($direccion)
    // $tabla.appendChild($botton1)
    // $tabla.appendChild($botton2)
    // --------------------------------------------
    // $botton1.textContent("Eliminar")
    // $botton2.textContent("Modificar")
    
