import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'


const Formulario = () => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .required("El nombre es requerido")
            .min(3, "El nombre debe tener al menos 3 caracteres")
            .max(50, "El nombre no debe tener más de 50 caracteres"),
        empresa: Yup.string()
            .required("La empresa es requerida"),
        email: Yup.string()
            .email("El email no es válido")
            .required("El email es requerido"),
        telefono: Yup.number()
        
            .positive("nmumber no válido")
            .integer("telefono no valido sin signos")
            .typeError("solo deben ser numeros")
            .required("El teléfono es requerido"),
            
            
        
        notas: Yup.string(),
    })



    const handleSubmit = (valores) => {
        console.log(valores)




    }


    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                Agregar Cliente
            </h1>
            <Formik
                initialValues={{
                    nombre: "",
                    empresa: "",
                    email: "",
                    telefono: "",
                    notas: "",

                }}
                onSubmit={(values) => {
                    handleSubmit(values)

                }}
                validationSchema={nuevoClienteSchema}
            >

                {({ errors, touched }) => {
                    // console.log(errors,touched)

                    return (

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
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    name="nombre"

                                />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}



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
                                    className='mt-2 block w-full p-3 bg-gray-50'
                                    name="empresa"


                                />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}


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
                                    name="email"
                                    className='mt-2 block w-full p-3 bg-gray-50' />
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}

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
                                    name="telefono"
                                    placeholder='Ingrese Telefono +569xxxxxxx'
                                    className='mt-2 block w-full p-3 bg-gray-50' />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}

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
                                    name="notas"
                                    placeholder='Notas del Cliente'
                                    className='mt-2 block w-full p-3 bg-gray-50 h-40' />


                            </div>
                            <input
                                value='Agregar Cliente'
                                className='mt-5 bg-blue-500 w-full  hover:bg-blue-700 text-white uppercase font-bold text-lg'
                                type='submit'
                            />

                        </Form>
                    )
                }}


            </Formik>
        </div>
    )
}

export default Formulario