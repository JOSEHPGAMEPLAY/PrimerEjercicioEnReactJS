import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({ contacto, remove }) => {


    /**
     * Creo una funcion el cual se va a encargar de decirnos si el usuario esta conectado o no
     * si esta conectado nos mostara un cirulo verde de lo contrario seria rojo
     */
    function contactoEstado(){
        if (contacto.conectado) {
            return(
                <i className='bi bi-circle-fill' style={{color: 'green'}} />
            )
        } else {
            return(
                <i className='bi bi-circle-fill' style={{color: 'red'}} />
            )
        }
        
    }

    return (
        <tr className='fw-normal'>
            {/* <div>
                <h1>Nombre: { contacto.nombre }</h1>
                <h2>Apellido: { contacto.apellido }</h2>
                <h3>Email: { contacto.email }</h3>
                <h4>Estado: {contacto.conectado ? 'Contacto En Linea' : 'Contacto No Disponible' }</h4>
            </div> */}
            <th>
                {contactoEstado()}
            </th>
            <td className='aling-middle' style={{margin: '5px'}}>
                <span className='ms-2'>{ contacto.nombre }</span>   
            </td>
            <td className='aling-middle' style={{margin: '5px'}}>
                <span>{ contacto.apellido }</span>
            </td>
            <td className='aling-middle' style={{margin: '5px'}}>
                <span>{ contacto.email }</span>
            </td>
            <td>
                <i className='bi-trash' onClick={() => remove(contacto)} style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>
        
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    remove: PropTypes.func.isRequired,
};

export default ContactoComponent;
