import React from 'react'
import { Formik, Form, Field } from 'formik'

const Formulario = () => {
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                Agregar Cliente
            </h1>
            <Formik>
                <Form
                className='mt-10'
                >
                    <div 
                    className='mb-4'
                    >
                        <label
                        className='text-gray-800 font-bold text-lg'
                        htmlFor='nombre'
                        >Nombre:</label>
                        <Field
                        id='nombre'
                        type='text'
                        placeholder='Nombre del Cliente'
                        className='mt-2 block w-full p-3 bg-gray-50'/>

                    </div>
                   
                    <div 
                    className='mb-4'
                    >
                        <label
                        className='text-gray-800 font-bold text-lg'
                        htmlFor='empresa'
                        >Empresa del cliente:</label>
                        <Field
                        id='empresa'
                        type='text'
                        placeholder='Nombre de la Empresa'
                        className='mt-2 block w-full p-3 bg-gray-50'/>

                    </div>
                   
                    <div 
                    className='mb-4'
                    >
                        <label
                        className='text-gray-800 font-bold text-lg'
                        htmlFor='email'
                        >E-mail:</label>
                        <Field
                        id='email'
                        type='email'
                        placeholder='Ingrese Email'
                        className='mt-2 block w-full p-3 bg-gray-50'/>

                    </div>
                    <div 
                    className='mb-4'
                    >
                        <label
                        className='text-gray-800 font-bold text-lg'
                        htmlFor='telefono'
                        >Telefono:</label>
                        <Field
                        id='tel'
                        type='text'
                        placeholder='Ingrese Telefono +569xxxxxxx'
                        className='mt-2 block w-full p-3 bg-gray-50'/>

                    </div>

                    <div 
                    className='mb-4'
                    >
                        <label
                        className='text-gray-800 font-bold text-lg'
                        htmlFor='notas'
                        >Notas:</label>
                        <Field
                        as='textarea'
                        id='tel'
                        type='text'
                        placeholder='Notas del Cliente'
                        className='mt-2 block w-full p-3 bg-gray-50 h-40'/>

                    </div>
                    <input
                    value='Agregar Cliente'
                    className='mt-5 bg-blue-500 w-full  hover:bg-blue-700 text-white uppercase font-bold text-lg'
                    type='submit'
                    />

                </Form>
               

            </Formik>
        </div>
    )
}

export default Formulario