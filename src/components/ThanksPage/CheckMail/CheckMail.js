import React from 'react';
import PropTypes from 'prop-types';
import './checkMail.scss';
import { useSpring, animated } from 'react-spring';
import { ANIMATION_DURATION } from '../../../constants';

const CheckMailTable = ({ textContent }) => {

    const { 
    titleWarning,
    title,
    textBeforeEmail,
    textAfterEmail,
    textBottom,
    email,
    btnNoTitle,
    btnNoText,
    btnNoInner,
    btnOkTitle,
    btnOkText,
    btnOkInner 
} = textContent;

    const userEmail = 'example@gmail.com';

    const {opacity, xyz} = useSpring({
		from: {
			opacity: 0,
			xyz: [0, 100, 0]
		},
		opacity: 1,
		xyz: [0, 0, 0],
		config: { duration: ANIMATION_DURATION }});

return (
    <animated.div className='check-mail' style={{
        opacity: opacity.interpolate(opacity => opacity),
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)}}
    >
        <h2 className='check-mail__title'>
            <span className='check-mail__title-warning'>{titleWarning}</span>
            <span className='check-mail__title-text'>{title}</span>
        </h2>
        <p className='check-mail__text'>
            <span>{textBeforeEmail}</span>
            <span className='check-mail__text_green'>{userEmail}</span>
            <span dangerouslySetInnerHTML={{__html: textAfterEmail}}></span>
        </p>
        <div className='check-mail__btns-wrap'>
            <div className='check-mail__btn-wrap'>
                <h3 className='check-mail__btn-title'>{btnNoTitle}</h3>
                <p className='check-mail__btn-text'>{btnNoText}</p>
                <a className='check-mail__link' href='#'>{btnNoInner}</a>
            </div>
            <div className='check-mail__btn-wrap check-mail__btn-wrap_green'>
                <h3 className='check-mail__btn-title'>{btnOkTitle}</h3>
                <p className='check-mail__btn-text'>{btnOkText}</p>
                <a className='check-mail__link check-mail__link_green' href='#' dangerouslySetInnerHTML={{__html: btnOkInner}}></a>
            </div>
        </div>
        <p className='check-mail__text check-mail__text_left'>
            {textBottom}
            <a className='check-mail__usual-link' href={"mailto:" + email}>{email}</a>
        </p>
    </animated.div>
)
}

export default CheckMailTable;

CheckMailTable.propTypes = {
	textContent: PropTypes.shape({
        titleWarning: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        textBeforeEmail: PropTypes.string.isRequired,
        textAfterEmail: PropTypes.string.isRequired,
        textBottom: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        btnNoTitle: PropTypes.string.isRequired,
        btnNoText: PropTypes.string.isRequired,
        btnNoInner: PropTypes.string.isRequired,
        btnOkTitle: PropTypes.string.isRequired,
        btnOkText: PropTypes.string.isRequired,
        btnOkInner: PropTypes.string.isRequired,
    }),
};