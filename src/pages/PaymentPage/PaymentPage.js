import React, { useState } from 'react';
import './paymentPage.scss';
import PageLayout from '../../components/PageLayout/PageLayout';
import Email from '../../components/Email/Email';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';

const PaymentPage = (props) => {

    const path = props.match.path;
    const pathOptions = {
        card: '/payment-via-card',
        paypal: '/payment-via-paypal'
    }

    const temporaryEmail = 'example@mail.com';
    const temporaryLink = '#';

    const { Container } = PageLayout;

    const {
		paymentPage: {
			textBeforeEmail,
            textAfterEmail,
            buttonText,
            notifyFirst,
            notifySecond,
            price,
            priceSup,
            priceText,
            accept,
            policies,
		}
    } = useReduxState(getLanguageState);

    const [isEmailShown, setEmailShown] = useState(false);

    const toggleEmail = () => {
        isEmailShown ? setEmailShown(false) : setEmailShown(true)
    }
    
    return (
        <Container>
            <div className='payment-page'>
                <p className='payment-page__text'>
                    <span>{textBeforeEmail}</span>
                    <span className='payment-page__text_colored'>{temporaryEmail}</span>
                    <span>{textAfterEmail}</span>
                </p>
                <button className='payment-page__btn' type='button' onClick={toggleEmail}>{buttonText}</button>

                {isEmailShown &&
                    <Email title=''
						btnText='Confirm'
                        mods={{bordered: false, widderForm: true, widderWrap: true}}/>
                }

                <div className='payment-page__wrap'>
                    <div className='payment-page__text-wrap'>
                        <p className='payment-page__small-text'>
                            <span className='payment-page__small-text'>{notifyFirst}</span>
                            <span className='payment-page__small-text'>{notifySecond}</span>
                        </p>
                    </div>
                    <div className='payment-page__text-wrap'>
                        <span className='payment-page__price'>{price}
                            <sup>{priceSup}</sup>
                        </span>
                        <span className='payment-page__small-text'>{priceText}</span>
                    </div>
                </div>
                {
                    (() => {
                        switch(path) {
                            case pathOptions.card: 
                                return <div className='payment-page__frame'>
                                    <iframe src="https://pay.signedpay.com/api/v1/purchase/fd6229ca58a643929d0c738b5086a3b8f591b1375d66a5482ca26" frameborder="0"></iframe>
                                </div> ;
                                break;
                            case pathOptions.paypal: 
                                return <a href={temporaryLink} className='payment-page__pay-btn'>
                                    <span className='payment-page__for-reader'>PayPal checkout</span>
                                </a>;
                                break; 
                        } 
                    })()
                }
                <p className='payment-page__small-text payment-page__small-text_hight'>
                    <span>{accept}</span>
                    <a className='payment-page__link' href={temporaryLink}>{policies}</a>
                </p>
            </div>
        </Container>
    )
}

export default PaymentPage;