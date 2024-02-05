import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

type PropsType = {
    status?: boolean 
    isCaptcha: boolean | null
    logOutFn: () => any
    captcha: string | null
    errorData: boolean | null
    disLogin: (email: string | null, password: string | null, rememberMe: boolean, captcha: any) => void
}
type validationsShemaType = {
    password?: string
    confirmPassword?: string
    email?: string
    confirmEmail?: string
    setCaptcha?: string
}
const Login: React.FC<PropsType> = (props) => {
    const validationsShema = yup.object<validationsShemaType>().shape({
        password: yup
            .string()
            .typeError('must be a string')
            .required('поле обязательно'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'пароли не совпадают')
            .required('поле обязательно'),
        email: yup
            .string()
            .email('enter correct email')
            .required('поле обязательно'),
        confirmEmail: yup
            .string()
            .email('enter correct email')
            .oneOf([yup.ref('email')],' email не совпадают')
            .required('поле обязательно'),
        setCaptcha: yup.string()

    })
    return <>
        <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
                email: '',
                confirmEmail: '',
                rememberMe: false,
                setCaptcha: ''
            }}
            validateOnBlur
            validationSchema={validationsShema}
            onSubmit={(values) => { props.disLogin(values.email, values.password, values.rememberMe, values.setCaptcha) }}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <FlexForm  >
                    <Block >
                        <label htmlFor={`email`}>Email: </label>
                        <Input
                            type={`email`}
                            name={`email`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            disabled={props.status}
                        />
                    </Block>
                    {touched.email && errors.email && <Warning>{errors.email}</Warning>}
                    <Block>
                        <label htmlFor={`confirmEmail`}>Confirm email: </label>
                        <Input
                            type={`email`}
                            name={`confirmEmail`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmEmail}
                            disabled={props.status}
                        />
                    </Block>
                    {touched.confirmEmail && errors.confirmEmail && <Warning>{errors.confirmEmail}</Warning>}
                    <Block>
                        <label htmlFor={`password`}>Password: </label>
                        <Input
                            type={`password`}
                            name={`password`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            disabled={props.status}
                        />
                    </Block>
                    {touched.password && errors.password && <Warning>{errors.password}</Warning>}
                    <Block >
                        <label htmlFor={`confirmPassword`}>Confirm password: </label>
                        <Input
                            type={`password`}
                            name={`confirmPassword`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            disabled={props.status}
                        />
                    </Block>
                    {touched.confirmPassword && errors.confirmPassword && <Warning>{errors.confirmPassword}</Warning>}
                    {props.isCaptcha
                        ? <>
                        {props.captcha && <ImgCaptha alt='' src={props.captcha} />}
                        {props.captcha &&
                            <Block >
                                <label htmlFor={`setCaptcha`}>Write the captcha: </label>
                                <Input
                                    type={`text`}
                                    name={`setCaptcha`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.setCaptcha}
                                    disabled={props.status}
                                />
                            </Block>
                        }
                    </>
                        : null
                    }
                    {props.errorData ? <Warning>{props.errorData}</Warning> : null}
                    <BlockBtn>
                        <Btn
                            disabled={props.status || (!isValid && !dirty)}
                            onClick={(event: React.MouseEvent<HTMLElement>) => handleSubmit()}
                            type={`submit`}
                        >Log in</Btn>
                        <Btn
                            disabled={!props.status}
                            onClick={props.logOutFn}
                            type={`submit`}
                        >Log out</Btn>
                    </BlockBtn>
                </FlexForm>
            )}
        </Formik>
    </>
}
export default Login
const Input = styled.input`
    border:1px solid black;
    padding:2px 5px;
    display:block;
    width:100%;
    max-width:300px;
    &:focus{
        border:1px solid #1e3fe1;
        box-shadow:0px 0px 5px #1e3fe1;
    }
`;
const Btn = styled.button`
    border:1px solid black;
    padding:5px 10px;
    width:100px;
    cursor:pointer;
`;
const FlexForm = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:15px;
    border-radius:10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
`;
const Block = styled.div`
    display:flex;
    flex-direction:column;
    gap:5px;
`;
const BlockBtn = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`;
const Warning = styled.div`
    color:red;
    font-weight:bold;
`;
const ImgCaptha = styled.img`
    max-width:200px;
    border:1px solid black;

`;