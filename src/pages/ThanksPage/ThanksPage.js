import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';
import CheckMailTable from './CheckMail/CheckMail';
import './thanksPage.scss';

const { Container } = PageLayout;

const ThanksPage = () => {
    const {
        thanksPage: {
            title, firstSubtitle, secondSubtitle, notification
        }
    } = useReduxState(getLanguageState);
    return (
        <Container>
            <div className='thanks-page'>
                <div className='thanks-page__title-wrap'>
                    <h1 className='thanks-page__title'>{title}</h1>
                    <span className='thanks-page__subtitle'>{firstSubtitle}</span>
                    <span className='thanks-page__subtitle'>{secondSubtitle}</span>
                </div>
                <CheckMailTable textContent={notification} />
            </div>
        </Container>
    )
}

export default ThanksPage;