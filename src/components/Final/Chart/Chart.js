import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryArea, VictoryTheme, VictoryStack } from 'victory';
import './chart.scss';
import PageLayout from '../../PageLayout/PageLayout';

const { Container } = PageLayout;

const Chart = ({ dataChart, finalData }) => {
	const [data, setData] = useState([{ x: 1, y: 15, label: ''}, { x: 2, y: 10, label: 'jun'}, { x: 3, y: 8, label: 'jul'}, { x: 5, y: 6, label: ''}]);

	const { title, preposition, weight, measure, date } = dataChart;
	const {achievableProgress} = finalData;

	return (
		<section className='chart'>
			<Container>
				<div className='chart__inner'>
				<span className='chart__title'>{title}</span>
				<span className='chart__title chart__title_colored'>{achievableProgress + ' ' + measure}</span>
				<span className='chart__title chart__title_bold'>{preposition + ' ' + date}</span>
				<svg style={{position: 'absolute'}}>
					<defs>
						<linearGradient id="myGradient" 
						x1="100%" y1="80%" x2="50%" y2="0%"
						>
							<stop offset="0.13" stopColor="#00FFAB"></stop>
								<stop offset="0.51" stopColor="#FFC065"></stop>
								<stop offset="0.9" stopColor="#FF5722"></stop>
						</linearGradient>
					</defs>
				</svg>
				<VictoryChart
					theme={VictoryTheme.material}
					animate={{ duration: 1000 }}
				>
					<VictoryArea
							data={data}
							interpolation={"basis"}
							style={{
								data: {fill: "url(#myGradient)"}
							 }} 
						/>
				</VictoryChart>
				</div>
			</Container>
		</section>
	)
}
export default Chart;