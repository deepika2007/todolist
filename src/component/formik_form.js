import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log(values)
}
const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'required name'
    }

    if (!values.email) {
        errors.email = 'required email'
    }
    if (!values.channel) {
        errors.channel = 'required channel'
    }

    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
    .email('Invalid Email')
    .required('Required'),
    channel: Yup.string().required('Required')
})


const Formik_form = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    // console.log( formik.touched)
    // this useFormik contain object value

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <label>Name :</label>
                    <input className='form-control' type='text' id='name' name='name'
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} autoComplete='off'></input><br></br>
                    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p> : null}

                    <label>Email :</label>
                    <input className='form-control' type='email' id='email' name='email'
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} autoComplete='off'></input><br></br>
                    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p> : null}

                    <label>Channel :</label>
                    <input className='form-control' type='text' id='channel' name='channel'
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} autoComplete='off'></input><br></br>
                    {formik.touched.channel && formik.errors.channel ? <p className='text-danger'>{formik.errors.channel}</p> : null}

                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Formik_form
