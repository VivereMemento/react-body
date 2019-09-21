import React from 'react';
import './faq.scss';
import { useReduxState } from '../store/redux-hooks';
import { getLanguageState } from '../store/reducers/language';
import InfoFrame, { InfoList } from '../components/Info/InfoFrame';

const Faq = props => {
	const {faq: { items }} = useReduxState(getLanguageState);
	return (
		<section className='faq'>
			<div className='faq__inner'>
				<InfoFrame>
					<h1 className='info__heading'>Frequently asked questions</h1>
					<InfoList items={ items } />
				</InfoFrame>
			</div>
		</section>
	)
}
export default Faq;