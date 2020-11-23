import React from 'react'
import AllControlers from './AllControlers'
import select from 'react-select'

function FormControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <AllControlers {...rest} />
            break;
        case 'textarea':
            return <AllControlers {...rest} />
            break;
        case 'select':
            return <AllControlers {...rest} />
            break;
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormControl
