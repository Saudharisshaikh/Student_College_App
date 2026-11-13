import * as yup from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const loginValidationSchema = yup.object().shape({

    email: yup.string().matches(emailRegex, 'Invalid email address').required('Email is required'),
    password:yup.string().required('Password is required')
})
