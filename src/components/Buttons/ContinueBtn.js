import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './continue.scss';
import { useReduxState } from '../../store/redux-hooks';
import { getGenderState } from '../../store/reducers/gender';

const ContinueBtn = ({isContinue, pathTo, text='', mods={}}) => {
	const { arrow } = mods;

	return (
		<Link
			to={ `/${pathTo}` } 
			className={
				classNames({
					'continue': true,
					'continue_valid': isContinue,
				})
			}>
			<span className={
				classNames({
					'continue__text': true,
					'continue__text_arrow': arrow,
				})
			}>{text}</span>
		</Link>
	)
}
export default ContinueBtn;

ContinueBtn.propTypes = {
	isContinue: PropTypes.bool,
	pathTo: PropTypes.string.isRequired,
	text: PropTypes.string,
	mods: PropTypes.object
};