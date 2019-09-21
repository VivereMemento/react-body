import React from 'react';
import './testimonial.scss';
import PageLayout from '../../PageLayout/PageLayout';
import { renderItems } from '../../helpers';

const { Container } = PageLayout;
const TestimonialItem = ({name, age, img, text}) => (
	<li className='testimonial__item'>
		<figure className='testimonial__img-wrap'>
			<img className='testimonial__img' src='https://bodyfitplan.me/wp-content/uploads/2018/07/2.png' alt='avatar'/>
		</figure>
		<div className='testimonial__content'>
			<span className='testimonial__text'>’17 kg gone by summer and my son is not ashamed of me anymore’</span>
			<span className='testimonial__name'>Teresa Taller, 45</span>
		</div>
	</li>
)
const Testimonial = ({data}) => (
	<section className='testimonial'>
		<Container>
			<ul className='testimonial__list'>
				{ renderItems(data, TestimonialItem)}
			</ul>
		</Container>
		
	</section>
);

export default Testimonial;