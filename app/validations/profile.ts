import * as yup from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const profileValidationSchema = yup.object().shape({

    name:yup.string().required('Name is required'),
    email: yup.string().matches(emailRegex, 'Invalid email address').required('Email is required'),
    rollNumber:yup.string().required('Roll Number is required')
    .matches(/^[0-9]+$/, 'Roll Number must contain only numbers'),
    phone: yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
    .min(11, 'Phone number must be at least 11 digits')
    .required('Phone number is required'),
   

})