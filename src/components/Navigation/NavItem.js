import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

const NavItem = ({name, url}) => (
	<li className="nav__item">
		<NavLink to={url} className="nav__link" activeClassName="nav__link_selected">
			{ name }
		</NavLink>
	</li>
);
NavItem.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
export default NavItem;