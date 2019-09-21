import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import './payment.scss';
import './woman-payment.svg';
import { CheckPink, Card, PayPal } from '../../SvgInline';
import PageLayout from '../../PageLayout/PageLayout';
import PaymentBtn from '../../Buttons/PaymentBtn';
import { setHeaders, useLocalStorage, useIntersect } from '../../helpers';
import { useReduxState } from '../../../store/redux-hooks';
import { getChoicesState } from '../../../store/reducers/choices';
import { BODYFIT_STEPS } from '../../../constants';
import { api } from '../../../store/api';

const { Container } = PageLayout;

const Payment = ({data, payRef, setIsStickyVisible}) => {
	const [storedValue, setValue] = useLocalStorage(BODYFIT_STEPS, null);
	const [posting, sendPaymentRequest] = api.sendPaymentRequest(Object.assign(
		{method: 'PATCH'},
		setHeaders({
			Authorization: 'Bearer ' + storedValue.token,
		}))
	);
	const {
		gender,
		title,
		price: {
			current,
			sale,
			currency,
			items
		}
	} = data;
	const { steps }  = useReduxState(getChoicesState);
	const handlePaymentCard = () => {
		sendPaymentRequest({
			paymentMethod: 0,
			orderId: storedValue.final.orderId,
			failCallbackUrl: 'https://localhost:9002/final'
		})
	};
	useIntersect(payRef, setIsStickyVisible);

	return (
		<section className='payment' ref={payRef} id='payment-section'>
			<Container>
				<div className='payment__inner'>
					<figure className='payment__img-wrap'>
						{/* <img className='payment__img' src={gender[steps['step-1']].img} alt={steps.GENDER}/> */}
					</figure>
					<div className='payment__content'>
						<h2 className='payment__title'>{ title }</h2>
						<div className='payment__price-wrap'>
							<div className='payment__price'>
								<span className='payment__price-current'>{ `${currency}${current}` }</span>
								{ 
									sale
										? (
											<span className='payment__price-sale'>
												{ `${currency}${sale.split('.')[0]}` }
												<sub>{ `${sale.split('.')[1]}` }</sub>
											</span>
										  )
										: null
								}
							</div>
							<ul className='payment__list'>
								{
									Array.isArray(items) 
									&& items.map((item, i) => 
										<li className='payment__item' key={i}>
											<div className='payment__item-svg'>
												<CheckPink className='check-pink' />
											</div>
											{ item }
										</li>
									) 
								}
							</ul>
						</div>
						<div className='payment__btns'>
							<PaymentBtn 
								text='Pay via card'
								SvgInline={ Card }
								handleOnClick={ handlePaymentCard }
							/>
							<PaymentBtn text='Pay via paypal' SvgInline={ PayPal } mod={{paypal: true}} />
						</div>
						<span className='payment__accent'>One-time payment | no hidden fees</span>
					</div>
				</div>
			</Container>
		</section>
	)
}
export default Payment;

Payment.propTypes = {
	data: PropTypes.shape({
		gender: PropTypes.object,
		title: PropTypes.string,
		price: PropTypes.object,
	}),
};