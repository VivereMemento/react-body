import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './download.scss';

const Download = ({text}) => {

	return (
		<a
			className={
				classNames({
					'download-btn': true
				})
			}
			href="#"
		>
			<span>{text}</span>
		</a>
	)
}
export default Download;

Download.propTypes = {
	text: PropTypes.string,
};