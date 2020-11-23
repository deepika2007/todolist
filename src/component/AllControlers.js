import React from 'react'
import { Field, ErrorMessage,FieldArray } from 'formik'
import select from 'react-select'
import TextError from './TextError'

function AllControlers(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='container'>
            <label>{label}</label>
            <Field  className='form-control' id={name} name={name}{...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>

            {/* <label>{label}</label>
            <Field as='textarea' className='form-control' id={name} name={name}{...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage> */}

            {/* <label>{label}</label>
             <Field as='select' className='form-control' id={name}  name={name} >
                {
                    options. map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        )
                    })}
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage> */}
        </div>
    )
}

export default AllControlers
