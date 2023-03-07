import React, {useState, useEffect, useRef} from 'react'

// service
import Storage from '@/services/storage.service'
import axios from 'axios'

import { useRouter } from 'next/router'

interface registerFormProps {
    switchForm: () => void;
}

const RegisterForm: React.FC<registerFormProps> = ({switchForm}) => {
    // router
    const router = useRouter()
    
    // states
    const [error, setError] = useState<String>('');
    const [loading, setLoading] = useState<boolean>(false);

    // form states
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleName: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setName(e.target.value)
    }

    const handleEmail: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setPassword(e.target.value)
    }

    const changeForm: React.MouseEventHandler<HTMLButtonElement> | undefined = e => {
        e.preventDefault();
        switchForm();
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault()
        
        setLoading(true)

        if (validateForm()) {

            let newUser = {
                name: name,
                email: email,
                password: password
            }

            axios.post('http://localhost:8000/api/v1/auth/signup', newUser)
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                    clearForm()
                    setError('')
                    setLoading(false)
                    // TODO: dispatch user auth action
                    // TODO: persist data using storage service
                    // TODO: inspect cookies
                    router.push('/core')
                }
                else {
                    setError(response.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
                setError(err.response.data.error)
            })
        }
        else {
            // console.error('Form validation error')
            setLoading(false)
            return false
        }
    }

    const validateForm = () => {
        let isValid = false

        if (name.length === 0) {
            setError('Name can"t be blank!')
            isValid = false
        }
        else if (email.length === 0) {
            setError('Email can"t be blank!')
            isValid = false
        }
        else if (!isValidEmail(email)) {
            setError('Email is invalid!')
            isValid = false
        }        
        else if (password.length === 0) {
            setError('Password can"t be blank!')
            isValid = false
        }
        else {
            setError('')
            isValid = true
        }

        return isValid
    }

    const isValidEmail = (s: string) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s);
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className='h-auto w-4/5 md:w-3/5 flex flex-col items-center justify-center'>
            {/* caption */}
            <div className='flex flex-col items-center justify-center space-y-4 my-10'>
                <h2 className='font-medium text-2xl'>Hey Champ!</h2>
                <p className='w-11/12 text-md text-gray-700 text-center'>Welcome to the largest automobile social media, fill in your details to get involved</p>
                <span className='text-red-500 text-sm text-center'>{error}</span>
            </div>
            {/* FullName */}
            <div className='h-12 w-full flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-2 overflow-hidden my-1'>
                <i className='la la-user text-2xl text-gray-400'></i>
                <input 
                name="name"
                value={name}
                onChange={handleName}
                autoComplete='off' 
                type="text" 
                className='h-full w-full bg-transparent focus:outline-none' 
                placeholder='Full Name' />
            </div>
            {/* Email Address */}
            <div className='h-12 w-full flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-2 overflow-hidden my-1'>
                <i className='la la-at text-2xl text-gray-400'></i>
                <input 
                name="email"
                 value={email}
                 onChange={handleEmail}
                autoComplete='off' 
                type="text" 
                className='h-full w-full bg-transparent focus:outline-none' 
                placeholder='Email Address' />
            </div>
            {/* Password Address */}
            <div className='h-12 w-full flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-2 overflow-hidden my-1'>
                <i className='la la-shield text-2xl text-gray-400'></i>
                <input 
                name="password"
                value={password}
                onChange={handlePassword}
                autoComplete='off' 
                type="password" 
                className='h-full w-full bg-transparent focus:outline-none' 
                placeholder='Password' />
            </div>
            {/* Submit */}
            <button type="submit" className='h-12 w-full bg-black text-lg text-white flex items-center justify-center space-x-5 rounded-lg my-1'>
                <span>Sign Up</span>
                {loading ? (
                    <i className='h-5 w-5 bg-white rounded-full animate-ping'></i>
                ) : null}
            </button>
            {/* Switch Form */}
            <div className='h-auto w-full flex items-center justify-center my-1'>
                <p className='flex items-center justify-center space-x-2'>
                    <span className='text-sm text-gray-400'>Already have an account?</span>
                    <button onClick={changeForm} className='font-medium text-sm cursor-pointer text-[#5CB9ED]'>Sign In</button>
                </p>
            </div>
        </form>
    )
}

export default RegisterForm