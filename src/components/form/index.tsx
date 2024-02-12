import React from 'react'
import { Button, ButtonText, CheckBox, Dot, ErrorText, Form as FormContainer, FormSubContainer, LabelRow, Link, Mark, Policy, SubmitContainer, TextInput, TylerDurden, TylerInnerContainer, TylerOuterContainer } from './styled'
import { Formik } from 'formik';
import { formSchema } from './formScheme';
import tylerDurden from '../../assets/punchClub.png'

export type FormFields = {
    name: string;
    company: string;
    email: string;
    ph_number: string;
    checked: boolean;
}

export default function Form() {
    const postForm = async (values: FormFields, setSubmitting: (isSubmitting: boolean) => void) => {
        try {
            const formData = new FormData();
            for (let key in values) {
                //@ts-ignore
                key != 'checked' && formData.append(key, values[key]);
            }
            setSubmitting(false);
            await fetch('https://webhook.site/d4100a8e-b406-4cc0-b9ea-06c1b9138e75', {
                body: formData,
                method: 'post'
            })
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Formik
            isInitialValid={false}
            validationSchema={formSchema}
            initialValues={{ name: '', company: '', email: '', ph_number: '', checked: false }}
            onSubmit={(values, { setSubmitting }) => {
                postForm(values, setSubmitting);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <FormContainer onSubmit={handleSubmit}>
                    <FormSubContainer>
                        <TextInput
                            placeholder='Name*'
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                        <TextInput
                            placeholder='Company'
                            type="text"
                            name="company"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.company}
                        />

                        <TextInput
                            placeholder='Email*'
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && <ErrorText>{errors.email}</ErrorText>}
                        <TextInput
                            placeholder='Phone number'
                            type="tel"
                            name="ph_number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ph_number}
                        />

                        <LabelRow htmlFor='checked'>
                            <CheckBox
                                id='checked'
                                type='checkbox'
                                name="checked"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Mark>
                                {values.checked && <Dot />}
                            </Mark>
                            <Policy>I agree to the processing of personal data according to the <Link>Privacy Policy</Link></Policy>
                        </LabelRow>
                        {errors.checked && <ErrorText>{errors.checked}</ErrorText>}
                    </FormSubContainer>
                    <SubmitContainer>
                        <TylerOuterContainer>
                            <TylerInnerContainer>
                                <TylerDurden src={tylerDurden} />
                            </TylerInnerContainer>
                        </TylerOuterContainer>
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                        >
                            <ButtonText>Submit</ButtonText>
                        </Button>
                    </SubmitContainer>
                </FormContainer>
            )}
        </Formik>
    )
}