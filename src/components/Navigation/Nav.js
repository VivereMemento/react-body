import React from 'react';
import NavItem from './NavItem';
import { renderItems } from '../helpers';
import { useReduxState } from '../../store/redux-hooks';
import { getLanguageState } from '../../store/reducers/language';
import './nav.scss';


const Nav = (prop) => {
	const { navigation } = useReduxState(getLanguageState)
	return (
		<nav className="nav">
			<ul className="nav__list">
				{ renderItems(navigation, NavItem) }
			</ul>
		</nav>
	)
}
export default Nav;