import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}

            <InputCommon label='Email' type='text' isRequired />
            <InputCommon label='Password' type='password' isRequired />
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

            <div className={boxRememberMe}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
                <Button
                    content={isRegister ? 'REGISTER' : 'LOGIN'}
                    type='submit'
                />
            </form>

            <Button content={'LOGIN'} />
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : 'Don’t have an account?'
                }
                isPriamry={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />

            <div className={lostPw}>Lost your password?</div>
            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}
export default Login;