import React from 'react';
import { useReduxState } from '../../../store/redux-hooks';
import { getLanguageState } from '../../../store/reducers/language';
import './recomendations.scss';


const Recomendations = props => {
	const { 
        mealPlan: {
		recomendations: {
			title,
			text,
			item1,
			items
		} 
    }
 } = useReduxState(getLanguageState);

    return (
            <div className='recomendations'>
                <h2 className='recomendations__title'>{title}</h2>
                <p className='recomendations__text'>{text}</p>
                    <ul className='recomendations__list'>
                        <li className='recomendations__item'>
                            <span>{item1.text}</span>
                            {item1.points.map((point, index) => 
                                <span key={ index }>{point}</span>
                            )}
                        </li>
                        {items.map((item, index) => 
                            <li key={ index } className='recomendations__item'>{item}</li>
                        )}
                    </ul>
            </div>
    )
    
}

export default Recomendations;