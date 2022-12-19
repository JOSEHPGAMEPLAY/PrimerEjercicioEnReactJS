import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import ContactForm from '../pure/forms/contactForm';

const ContactolistComponent = () => {

    const DefaultContacto1 = new Contacto('Jose','Vera','JV@hotmail.com',false);
    const DefaultContacto2 = new Contacto('Hernando','Jaimes','HJ@hotmail.com',true);
    const DefaultContacto3 = new Contacto('Paula','Rivera','PR@hotmail.com',false);
    const DefaultContacto4 = new Contacto('Yanid','Buitrago','YB@hotmail.com',true);

    const [contactos, setContactos] = useState([DefaultContacto1, DefaultContacto2, DefaultContacto3, DefaultContacto4, ]);

    function removeContacto(contacto){
        console.log('Eliminando contacto: ', contacto)
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index, 1);
        setContactos(tempContactos);
    }

    function addContacto(contacto){
        console.log('Añadiendo contacto: ', contacto)
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div>
        <div>
            <div className='col-12' >
                <div className="card">
                    <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position: 'relative', height: '500px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contactos.map((contacto, index) => {
                                    return (
                                        <ContactoComponent 
                                        key={index} 
                                        contacto={contacto}
                                        remove={removeContacto}
                                        >
                                        </ContactoComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContacto}></ContactForm>
        </div>
        </div>
    );
};

export default ContactolistComponent;
