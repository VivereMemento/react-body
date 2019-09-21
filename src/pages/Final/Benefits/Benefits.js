import React from 'react';
import PropTypes from 'prop-types';
import InfoFrame, { InfoList } from '../../../components/Info/InfoFrame';

const mods = {
	colors: {boldPink:true},
	arrow: true,
};

const Benefits = ({data}) => {
	const { title, items } = data;
	return (
		<section className='benefits'>
			<InfoFrame>
				<h2 className='final__title'>{ title }</h2>
				<InfoList items={ items } mods={mods} />
			</InfoFrame>
		</section>
	)
}

export default Benefits;

Benefits.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.array,
	}),
};