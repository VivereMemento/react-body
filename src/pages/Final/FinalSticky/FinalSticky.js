import React, {useRef, useState} from 'react';
import classNames from 'classnames';
import './final-sticky.scss';
import PageLayout from '../../../components/PageLayout/PageLayout';
import './arrow-right.svg';

const { Container } = PageLayout;

const FinalSticky = ({ data, payRef, isStickyVisible }) => {

	const { text, btnText } = data;

	const scrollToPayment = () => {
		payRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
		  });
	}

return (	 
	<div 
		className={
			classNames({
				'final__sticky': true,
				'final__sticky_visible': isStickyVisible,
			})
		}
	>
		<Container>
			<div className='final__sticky-inner'>
				<span className='final__sticky-text'>{text}
					<img className='final__sticky-img' src="./images/arrow-right.svg" alt=""/>
				</span>
				<button className='final__sticky-btn' 
				onClick={scrollToPayment}
				>{btnText}</button>
			</div>
		</Container>
	</div>

)};

export default FinalSticky;