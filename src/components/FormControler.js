import React from 'react'
import ChakraInput from './ChakraInput';
import Checkbox from './Checkbox';
import Datepicker from './Datepicker';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select from './Select';
import Textarea from './Textarea';

function FormControler(props) {
    const {control,...rest}=props;
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
        return <Textarea {...rest}/>
        case 'select':
            return <Select {...rest}/>
            case 'radio':
                return <RadioButtons {...rest}/>
        case 'checkbox':
            return <Checkbox {...rest}/>
        case 'date':
            return <Datepicker {...rest}/>
        case 'chakrainput':
            return <ChakraInput {...rest}/>
            default:return null
    }
}

export default FormControler