import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import './help-btn.scss';
import './question.svg';
import './cross-pink.svg';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';

const HelpBtn = ({text}) => {

    const { helpBtn: {title} } = useReduxState(getLanguageState);
    const [isTextShown, setIsTextShown] = useState(false);

    const handleClick = () => {
        isTextShown ? setIsTextShown(false) : setIsTextShown(true);
    }

    return (
        <div className='help'>
            <button type='button' className='help__btn' onClick={handleClick}>
                <img src="../images/question.svg" alt="question character"/>
            </button>
            <div onClick={handleClick} className={classNames({
                    'help__wrap': true,
					'help__wrap_visible': isTextShown
				})}>
                <img className='help__close-btn' src='../images/cross-pink.svg' width='30' alt='cross'></img>
                <span className='help__title'>{title}</span>
                <span className='help__text'>{text}</span>
            </div>
        </div>
    )
}

export default HelpBtn;

HelpBtn.propTypes = {
	text: PropTypes.string
};
