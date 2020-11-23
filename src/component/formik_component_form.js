import React from 'react'
import { Formik,formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    // address: ''
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    pNumbers: ['']
}
const onSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required !'),
    email: Yup.string().email('Invalid Email').required('Required'),
    channel: Yup.string().required('Required'),
    comment: Yup.string().required('Required'),
})


const validateComments = value=> {
    let error
    if (!value) {
        error = "Required"
    }
    return error
}
const formik_component_form = () => {

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {/* validateOnChange={false} validateOnBlur={false} */}
            {formik => {
                console.log('formik props', formik)
                return (
                    <Form >
                        <div className='container'>
                            <label>Name :</label>
                            <Field className='form-control' type='text' id='name' name='name' ></Field>
                            <ErrorMessage name='name' component={TextError} />

                            <label>Email :</label>
                            <Field className='form-control' type='email' id='email' name='email' ></Field>
                            <ErrorMessage name='email' >
                                {
                                    (errorMsg) => <div className='error'>{errorMsg}</div>
                                }
                            </ErrorMessage>

                            <label>Channel :</label>
                            <Field className='form-control' type='text' id='channel' name='channel' ></Field>
                            <ErrorMessage name='channel' component={TextError} />

                            <label>Comments  :</label>
                            <Field as='textarea' className='form-control' id='comment' name='comment' validate={validateComments}></Field>
                            <ErrorMessage name='comment' component={TextError}></ErrorMessage>

                            <label>facebook Profile</label>
                            <Field className='form-control' id='facebook' type='text' name='social.facebook'></Field>

                            <label>twitter Profile</label>
                            <Field className='form-control' id='twitter' type='text' name='social.twitter'></Field>

                            <label> PriNumber</label>
                            <Field className='form-control' id='prinum' type='text' name='phoneNumber[0]'></Field>

                            <label>SecNumber</label>
                            <Field className='form-control' id='secnum' type='text' name='phoneNumber[1]'></Field>

                            <label>List of numbers</label>
                            <FieldArray name='pNumbers'>
                                {fieldArrayProps => {
                                    {/* console.log(fieldArrayProps) */ }
                                    const { push, remove, form } = fieldArrayProps
                                    const { values } = form
                                    const { pNumbers } = values
                                    {/* console.log('form error', form.errors) */ }
                                    return (<div>
                                        {pNumbers.map((pNumber, index) => (
                                            <div key={index} >
                                                <Field name={`pNumbers[${index}]`}></Field>&nbsp;
                                                {index > 0 && (
                                                    <button className='btn btn-sm btn-danger' onClick={() => remove(index)}>-</button>
                                                )
                                                }
                                                <button className='btn btn-sm btn-primary' onClick={() => push('')}>+</button>
                                            </div>
                                        ))}
                                    </div>)
                                }
                                }
                            </FieldArray>
                            <label>Address :</label>
                            <FastField name='address' >
                                {
                                    (props) => {

                                        const { field, form, meta } = props
                                        return (<div>
                                            <input id='address' className='form-control' {...field} />
                                            { meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>)
                                    }
                                }
                            </FastField><br></br>

                            <button onClick={() => formik.validateField('comment')}>Validate comment</button>
                            <button onClick={() => formik.validateForm()}>Validate all</button>


                            <br></br>

                            <button className='btn btn-success' type='submit'>Submit</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default formik_component_form
