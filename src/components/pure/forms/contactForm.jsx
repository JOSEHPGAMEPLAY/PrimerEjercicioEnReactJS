import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const ContactForm = ({ add, }) => {
    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContacto(e){
        e.preventDefault();
        const newTask = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
        );
        add(newTask);
    }
    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4' >
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputNombre'
                    type='text' className='form-control form-control-lg'
                    required autoFocus placeholder='Nombre del Contacto'

                />

                <input ref={apellidoRef} id='inputApellido'
                    type='text' className='form-control form-control-lg'
                    required autoFocus placeholder='Apellido del Contacto'

                />

                <input ref={emailRef} id='inputEmail'
                    type='email' className='form-control form-control-lg'
                    required autoFocus placeholder='Email del Contacto'
                />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Añadir</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default ContactForm;
