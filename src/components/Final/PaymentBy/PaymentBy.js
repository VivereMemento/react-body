import React from 'react';
import PropTypes from 'prop-types';
import './paymentBy.scss';
import PageLayout from '../../PageLayout/PageLayout';

const { Container } = PageLayout;

const PaymentBy = ({ data }) => {
    return (
        <section className='payment-by'>
            <Container>
                <div className='payment-by__inner'>
                    <span className='payment-by__text'>Secure payment by: </span>
                    {Array.isArray(data) && data.map(({ title, img }) => (
                        <div className='payment-by__img-wrap' key={title}>
                            <img className='payment-by__img' src={img} alt={title} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default PaymentBy;

PaymentBy.propTypes = {
	data: PropTypes.arrayOf(
        PropTypes.object
      ),
};