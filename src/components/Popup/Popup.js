import React, { useState, useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';
import './popup.scss';
import './cross.svg';
import Recipe from '../MealPlan/Recipe/Recipe';
import { useClickOutsideOfComponent } from '../helpers';

const SHOW_POPUP = 'SHOW::POPUP';
const HIDE_POPUP = 'HIDE::POPUP';
const initialState = {visibility: false};

function reducerPopup(state, {type}) {
	switch (type) {
		case SHOW_POPUP:
			return {visibility: true};
		case HIDE_POPUP:
			return {visibility: false};
		default:
			throw new Error();
	}
};

const Popup = React.memo(({children, isPopupShow, setIsPopupShow}) => {
    const [popupState, popupDispatch] = useReducer(reducerPopup, initialState);
    const hidePopup = () => {
        popupDispatch({type: HIDE_POPUP});
        setIsPopupShow(false);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        const setBodyOverflow = (value) => {
            body.style.overflow = value;
        }
        if (isPopupShow) {
            popupDispatch({type: SHOW_POPUP});
            setBodyOverflow('hidden');
        } else {
            setBodyOverflow('visible');
        }

    }, [isPopupShow]);

    useClickOutsideOfComponent(hidePopup, '.popup__backdrop');

    return (
        <div className={
            classNames({
                'popup': true,
                'popup_visible': popupState.visibility
            })
        }>
            <div className='popup__backdrop'>
                <div className='popup__content'>
                    <button 
                        className='popup__close-btn'
                        type='button'
                        onClick={hidePopup}
                    >   
                    </button>
                    { children }
                </div>
            </div>
        </div>
    )
})

export default Popup;