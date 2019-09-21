import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './email.scss';

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

const Email = ({title, btnText, handleOnSubmit, mods, onCloseClick}) => {
	const [emailValue, setEmailValue] = useState('');
	const [isValid, setIsValid] = useState(false);
	const {bordered, widderWrap, widderForm, bgWhite, smallerTitle, thinBorder, btnGreen, btnClose} = mods;

	
	const handleCloseBtnClick = () => {
		onCloseClick(false)
	};
	
	useEffect(() => {
		setIsValid(validateEmail(emailValue));
	}, [emailValue]);
	
	return (
		<div className={
			classNames({
				'email': true,
				'email_bordered': bordered,
				'email_bg-white': bgWhite,
				'email_no-pading': widderWrap,
			})
		}>
			<span className={
							classNames({
								'email__title': true,
								'email__title_small': smallerTitle
							})
						}>{ title }</span>
			<form
				className={
					classNames({
						'email__form': true,
						'email__form_wider': widderForm,
					})
				}
			>
				<div className='email__input-wrap'>
					<input
						className={
							classNames({
								'email__input': true,
								'email__input-wrong': emailValue && !isValid,
								'email__input_thin-border': thinBorder,
							})
						}
						type='email' placeholder='E-mail'
						value={ emailValue }
						onChange={ e => setEmailValue(e.target.value) }
					/>
				</div>
				<button
					className={
						classNames({
							'btn': true,
							'btn_green': btnGreen,
							'email__btn': true,
							'email__btn_valid': isValid,
						})
					}
					type='submit'
					onClick={event => {
						event.preventDefault();
						handleOnSubmit(emailValue);
					}}
				>
					{ btnText }
				</button>
				<button type='button' 
					className={
							classNames({
								'email__close-btn': true,
								'email__close-btn_show': btnClose,
							})
						} 
					onClick={ handleCloseBtnClick }>
				</button>
			</form>
		</div> 
	)
}

export default Email;

Email.propTypes = {
	title: PropTypes.string,
	btnText: PropTypes.string,
	handleOnSubmit: PropTypes.func,
	mods: PropTypes.object.isRequired,
}