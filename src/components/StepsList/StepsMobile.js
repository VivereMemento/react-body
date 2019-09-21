import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import classNames from 'classnames';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './steps-mobile.scss';
import './icons';
import { BASE_ROUTER_NAME } from '../../constants';

const params = {
	slidesPerView: 4,
}

const Link = withRouter(function Link(props) {
	const { children, history, to, staticContext, isChoosen, ...rest } = props;
	return <>
	  {
		!isChoosen 
			? <span>{children}</span>
			: <NavLink {...{to, ...rest}}>{children}</NavLink>
	  }
	</>
});

const MobileSteps = ({data, activeGender, chosenItems, countOfSteps }) => {
	const [swiper, updateSwiper] = useState(null);
 
	const goNext = () => swiper !== null && swiper.slideNext()
	
	const goPrev = () => swiper !== null && swiper.slidePrev()
	
	return (
		<React.Fragment>
			<button className='swiper-btn-prev' onClick={goPrev}></button>
			<Swiper getSwiper={updateSwiper} {...params}>
				{
					data.map(({path, icon, name }, index) => (
						<div 
							className='steps__link-wrap'
							key={index}
							style={ {zIndex:`${countOfSteps - index}`} }
						>
							<Link 
								to={path === BASE_ROUTER_NAME ? `${path}` : `/${activeGender}/step-${index}`}
								exact
								activeClassName='steps__link_active'
								isChoosen={chosenItems.includes(`step-${index}`)}
								className={classNames({
									'steps__link': false,
									'steps__link_chosen': chosenItems.includes(`step-${index}`)
									})
								}
							>
									<div className ='steps__link-inner'>
										<figure className='steps__img-wrap'>
											<img src={ icon } alt={ name } className='steps__img'/>
										</figure>
										<span className='steps__text'>{ name }</span>
									</div>
							</Link>
						</div>
					))
				}
			</Swiper>
      		<button className='swiper-btn-next' onClick={goNext}></button>
		</React.Fragment>
	)
};
MobileSteps.propTypes = {

};
export default MobileSteps;