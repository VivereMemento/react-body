import React from 'react';
import classNames from 'classnames';
import './payment-btn.scss';

const PaymentBtn = ({text, SvgInline, mod:{paypal} = {}, handleOnClick}) => {
	
	return (
		<button 
			className='payment-btn'
			onClick={ handleOnClick }
		>
			{ text }
			<div className={
				classNames({
					'payment-btn__svg': true,
					'payment-btn__svg_paypal': paypal
				})
			}>
				<SvgInline />
			</div>
		</button>
	)
}
export default PaymentBtn;