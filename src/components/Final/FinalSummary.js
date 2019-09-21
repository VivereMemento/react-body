import React from 'react';
import PropTypes from 'prop-types';
import { YearsSvg, HeightSvg, WeightSvg } from '../SvgInline';
import PageLayout from '../PageLayout/PageLayout';

const { Container } = PageLayout;

const FinalSummary = ({data}) => {
	const { title, age, height, weight } = data;

	return (
		<div className="final__summary">
			<Container>
				<div className='final__summary-inner'>
					<div className="final__summary-title">{ title }</div>
					<div className="final__summary-measuer">
						<span className="final__summary-item">
							<YearsSvg className="final__summary-svg" />
							<span className="final__summary-text">
								{ age.count }
								<span>{ age.text }</span>
							</span>
						</span>
						<span className="final__summary-item">
							<HeightSvg className="final__summary-svg" />
							<span className="final__summary-text">
								{ height.count }
								<span>{height.measure || '-'}</span>
							</span>
						</span>
						<span className="final__summary-item">
							<WeightSvg className="final__summary-svg" />
							<span className="final__summary-text">
								{ weight.count }
								<span>{ weight.measure }</span>
							</span>
						</span>
					</div>
				</div>
			</Container>
		</div>
	)
};

export default FinalSummary;

FinalSummary.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		age: PropTypes.object,
		height: PropTypes.object,
		weight: PropTypes.object,
	})
}