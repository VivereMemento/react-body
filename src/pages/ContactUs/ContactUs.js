import React from 'react';
import './contactUs.scss';
import PageLayout from '../PageLayout/PageLayout';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';

const { Container } = PageLayout;

const ContactUs = () => {
    const {
        contactUs: {
            title, text, email
        }
    } = useReduxState(getLanguageState);
    return (
        <Container>
            <div className='contact-us'>
                <h1 className='contact-us__title'>{title}</h1>
                <p>{text} 
                    <a className='contact-us__link' href={"mailto:" + email}> {email}</a>
                </p>
            </div>
        </ Container>
    )
};
export default ContactUs;

