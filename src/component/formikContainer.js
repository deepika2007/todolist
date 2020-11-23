import React from 'react'
import Select from 'react-select'
import { Formik, Form } from 'formik'
import *as Yup from 'yup'
import FormControl from './FormControl'

function formikContainer() {
    const dropOption = [
        { key: 'Select option', value: '' },
        { key: 'ONE', value: 'one' },
        { key: 'TWO', value: 'two' },
        { key: 'THREE', value: 'three' },
        { key: 'FOUR', value: 'four' },
        { key: 'FIVE', value: 'five' },

    ]
    const initialValues = {
        AdharCardNumber:''
        // description:''
        // selectOption: ['']
    }
    const validationSchema = Yup.object({
        AdharCardNumber: Yup.string()
        .matches("^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$",'Only Numbers valid')
        .required('Required'),
        // description:Yup.string().required('Required'),
        // selectOption: Yup.string().required('Required')
    })
    const onSubmit = values =>{ 
        console.log('form data', values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {formik => <Form>
                    <FormControl control='input' type='text' label='Adhar card' autoComplete='off' name='AdharCardNumber'/>
                    {/* <FormControl control='textarea' type='text' label='Description' name='description'/> */}
                    {/* <FormControl control='select' label='Select option' name='selectOption' options={dropOption} /> */}
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default formikContainer
