const data = {
	navigation: [
		{
			id: 1,
			name: 'FAQ',
			url: '/frequently-asked-questions',
		},
		{
			id: 2,
			name: 'Terms & Policies',
			url: '/general-condition',
		},
		{
			id: 3,
			name: 'Contacs',
			url: '/contact-us',
		}
	],
	faq: {
		heading: 'Frequently asked questions',
		items: [
			{
				title: 'Where do I get my meal plan?',
				text: 'We send an email with your meal plan to you. If you don’t see it, please check junk/spam folders. If you still don’t see it, there is a chance you might have misspelled your email address. Contact us to fix it.'
			},
			{
				title: 'The meal plan is empty, I see only recommendations',
				text: 'This problem may occur with certain internet browsers (e.g. Internet Explorer). In this case, try using another browser. We recommend using Google Chrome, Safari or Firefox for the best experience.',
			},
			{
				title: 'When will I receive my meal plan?',
				text: 'You should receive your meal plan right after the payment. If you don’t see it, please check junk/spam folders. If it’s not there, please contact us.'
			}
		]
	},
	steps: {
		help: 'But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
		'step-1': {
			heading: 'Answer 9 questions to calculate personalized meal plan',
			title: 'Select your gender',
			help: '0 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			man: {
				img: './images/man.svg',
				imgBg: './images/man-bg.svg'
			},
			woman: {
				img: './images/woman.svg',
				imgBg: './images/woman-bg.svg'
			}
		},
		'step-2': {
			gender: {
				man: {
					img: './images/man-day.svg',
					imgBg: './images/man-day-bg.inline.svg'
				},
				woman: {
					img: '../images/woman-day.svg',
					imgBg: '../images/woman-day-bg.svg'
				}
			},
			heading: 'Typical day',
			title: 'Select a line that describes your day the best',
			help: '1 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{
					id: 1,
					text: 'All day at the office'
				},
				{
					id: 2,
					text: 'I go out at lunch time'
				},
				{
					id: 3,
					text: 'Daily long walks'
				},
				{
					id: 4,
					text: 'Physical work'
				},
				{
					id: 5,
					text: 'Mostly at home'
				}
			]
		},
		'step-3': {
			gender: {
				man: {
					img: '../images/man-fitness.svg',
					imgBg: '../images/man-fitness-bg.svg'
				},
				woman: {
					img: '../images/woman-fitness.svg',
					imgBg: '../images/woman-fitness-bg.svg'
				}
			},
			heading: 'Fitness',
			title: 'My physical activity mostly looks like:',
			help: '2 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{
					id: 1,
					text: 'Almost nothing'
				},
				{
					id: 2,
					text: 'Only walks'
				},
				{
					id: 3,
					text: 'Doing fitness 1-2 times a week'
				},
				{
					id: 4,
					text: 'Doing fitness 3-5 times a week'
				},
				{
					id: 5,
					text: 'Doing fitness 5-7 times a week'
				}
			]
		},
		'step-4': {
			gender: {
				man: {
					img: '../images/man-water.svg',
					imgBg: '../images/man-water-bg.svg'
				},
				woman: {
					img: '../images/woman-water.svg',
					imgBg: '../images/woman-water-bg.svg'
				}
			},
			heading: 'Water',
			title: 'My daily water intake mostly looks like:',
			help: '3 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: {
				metric: [
					{
						id: 1,
						text: 'Only coffee or tea',
						measure: null
					},
					{
						id: 2,
						text: 'Less than 2 glasses',
						measure: '(0,5 L)'
					},
					{
						id: 3,
						text: '2-6 glasses',
						measure: '(0,5 - 1,5 L)',
					},
					{
						id: 4,
						text: '7-10 glasses',
						measure: '(1,5-2,5 L)'
					},
					{
						id: 5,
						text: 'More than 7 glasses',
						measure: null
					}
				],
				imperial: [
					{
						id: 1,
						text: 'Only coffee or tea',
						measure: null
					},
					{
						id: 2,
						text: 'Less than 2 glasses',
						measure: '(16 oz)'
					},
					{
						id: 3,
						text: '2-6 glasses',
						measure: '(16-48 oz)'
					},
					{
						id: 4,
						text: '7-10 glasses',
						measure: '(56-80 oz)'
					},
					{
						id: 5,
						text: 'More than 7 glasses',
						measure: null
					}
				]
			}
		},
		'step-5': {
			gender: {
				man: {
					img: '../images/man-sleep.svg',
					imgBg: '../images/man-sleep-bg.svg'
				},
				woman: {
					img: '../images/woman-sleep.svg',
					imgBg: '../images/woman-sleep-bg.svg'
				}
			},
			heading: 'Sleep',
			title: 'I sleep daily:',
			help: '4 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{
					id: 1,
					text: 'Less than 5 hours'
				},
				{
					id: 2,
					text: '5-6 hours'
				},
				{
					id: 3,
					text: '6-7 hours'
				},
				{
					id: 4,
					text: '7-8 hours'
				},
				{
					id: 5,
					text: 'More than 8 hours'
				}
			]
		},
		'step-6': {
			gender: {
				man: {
					img: '../images/man-measurements.svg',
					imgBg: '../images/man-measurements-bg.svg'
				},
				woman: {
					img: '../images/woman-measurements.svg',
					imgBg: '../images/woman-measurements-bg.svg'
				}
			},
			heading: 'Measurements',
			title: 'My physical activity mostly looks like:',
			help: '5 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: {
				metric: [
					{id: 'age', text: 'Age', items: [18, 19, 20, 21, 21], measure: null},
					{id: 'height', text: 'Height', items: [18, 19, 20, 21, 21], measure: '(cm)'},
					{id: 'weight', text: 'Weight', items: [18, 19, 20, 21, 21], measure: '(cm)'}
				],
				imperial: [
					{id: 'age', text: 'Age', items: [18, 19, 20, 21, 21], measure: null},
					{id: 'ft', text: 'Ft', items: [18, 19, 20, 21, 21], measure: null},
					{id: 'inch', text: 'Inch', items: [18, 19, 20, 21, 21], measure: null},
					{id: 'weight', text: 'Weight', items: [18, 19, 20, 21, 21], measure: '(lb)'}
				]
			}
		},
		'step-7': {
			gender: {
				man: {
					img: '../images/man-vegetables.svg',
					imgBg: '../images/man-vegetables-bg.svg'
				},
				woman: {
					img: '../images/woman-vegetables.svg',
					imgBg: '../images/woman-vegetables-bg.svg'
				}
			},
			heading: 'Vegetables',
			title: 'Mark the vegetables you want to include:',
			help: '6 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{id: 1, text: 'Potato', icon: '../images/potato.svg'},
				{id: 2, text: 'Pears', icon: '../images/potato.svg'},
				{id: 3, text: 'Quinoa', icon: '../images/potato.svg'},
				{id: 4, text: 'Rice', icon: '../images/potato.svg'},
				{id: 5, text: 'Mushrooms', icon: '../images/potato.svg'},
				{id: 6, text: 'Couscous', icon: '../images/potato.svg'}
			]
		},
        'step-8': {
			gender: {
				man: {
					img: '../images/man-products.svg',
					imgBg: '../images/man-products-bg.svg'
				},
				woman: {
					img: '../images/woman-products.svg',
					imgBg: '../images/woman-products-bg.svg'
				}
			},
			heading: 'Products',
			title: 'Mark the vegetables you want to include:',
			help: '7 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{id: 1, text: 'Potato', icon: '../images/potato.svg'},
				{id: 2, text: 'Pears', icon: '../images/potato.svg'},
				{id: 3, text: 'Quinoa', icon: '../images/potato.svg'},
				{id: 4, text: 'Rice', icon: '../images/potato.svg'},
				{id: 5, text: 'Mushrooms', icon: '../images/potato.svg'},
				{id: 6, text: 'Couscous', icon: '../images/potato.svg'},
				{id: 7, text: 'Ricec', icon: '../images/potato.svg'},
				{id: 8, text: 'Mushroomss', icon: '../images/potato.svg'},
				{id: 9, text: 'Couscouss', icon: '../images/potato.svg'}
			]
		},
        'step-9': {
			gender: {
				man: {
					img: '../images/man-meat.svg',
					imgBg: '../images/man-meat-bg.svg'
				},
				woman: {
					img: '../images/woman-meat.svg',
					imgBg: '../images/woman-meat-bg.svg'
				}
			},
			heading: 'Meat',
			title: 'Mark the vegetables you want to include:',
			help: '8 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				{id: 1, text: 'Potato', icon: '../images/potato.svg'},
				{id: 2, text: 'Pears', icon: '../images/potato.svg'},
				{id: 3, text: 'Quinoa', icon: '../images/potato.svg'},
				{id: 4, text: 'Rice', icon: '../images/potato.svg'},
				{id: 5, text: 'Mushrooms', icon: '../images/potato.svg'},
				{id: 6, text: 'Couscous', icon: '../images/potato.svg'}
			]
		},
		'step-10': {
			gender: {
				man: {
					img: '../images/man-finish.svg',
					imgBg: '../images/man-finish-bg.svg'
				},
				woman: {
					img: '../images/woman-finish.svg',
					imgBg: '../images/woman-finish-bg.svg'
				}
			},
			heading: 'Finish',
			title: 'Your meal plan is being calculated',
			help: '9 But even before posting the sweet family photo, the athlete took to his Youtube account, Still Squad, to show the world how Arya Marie, the baby, came into the world.',
			choices: [
				'Analyzing the data',
				'Measuring body profile',
				'Estimating portions',
				'Suggesting water amount consumption',
				'Recipes planning',
				'Your personal meal plan is ready!'
			]
		}
	},
	stepsMenu: [
		{
			id: 'Gender',
			name: 'Gender',
			icon: '../images/gender.svg',
			from: 0,
			to: 10,
			path: '/'
		},
		{
			id: 'Typical_day',
			name: 'Typical day',
			icon: '../images/day.svg',
			from: 10,
			to: 20,
			path: '/typical-day'
		},
		{
			id: 'Fitness',
			name: 'Fitness',
			icon: '../images/fitness.svg',
			from: 20,
			to: 30,
			path: '/fitness'
		},
		{
			id: 'Water',
			name: 'Water',
			icon: '../images/water.svg',
			from:30,
			to: 40,
			path: '/water'
		},
		{
			id: 'Sleep',
			name: 'Sleep',
			icon: '../images/sleep.svg',
			from: 40,
			to: 50,
			path: '/sleep'
		},
		{
			id: 'Measures',
			name: 'Measures',
			icon: '../images/measures.svg',
			from: 50,
			to: 60,
			path: '/measurements'
		},
		{
			id: 'Veggies',
			name: 'Veggies',
			icon: '../images/veggie.svg',
			from: 60,
			to: 70,
			path: '/vegetables'
		},
		{
			id: 'Products',
			name: 'Products',
			icon: '../images/products.svg',
			from: 70,
			to: 80,
			path: '/products'
		},
		{
			id: 'Meat',
			name: 'Meat',
			icon: '../images/meat.svg',
			from: 80,
			to: 90,
			path: '/meat'
		}
	],

	final: {
		sticky: {
			text: 'Plan is complite',
			btnText: 'Get it now',
		},
		summary: {
			title: 'Your profile summary',
			age: {
				count: 18,
				text: 'years',
			},
			height: {
				count: 190,
				measure: 'cm'
			},
			weight: {
				count: 45,
				measure: 'kg'
			}
		},
		chart: {
			title: 'Based on your answers you can be',
			preposition: 'by',
			weight: '-15.0',
			measure: 'LB',
			date: 'November 2019',
		},
		results: {
			week: {
				days: ['M','T','W','T','F','S','S'],
				weight: 1,
				measure: 'kg',
				sign: '+',
				text: 'After first week'
			},
			info: [
				{
					id: 'Bmi',
					title: 'Bmi',
					img: 'https://raw.github.com/pguso/jquery-plugin-circliful/master/preview/half_circle.PNG',
					text: 'Your weight is: ',
					measure: '',
					textInfo: 'Body Mass Index determines your weight status. This metric is widely used by physicians and health experts and shows the weight range your body belongs to: underweight, normal, slightly overweight, overweight and obese.',
				},
				{
					id: 'water-balance',
					title: 'Water balance',
					img: '',
					text: 'Your daily minimum: ',
					measure: '',
					textInfo: 'The recommended water intake was calculated according to your body measurements, lifestyle, and goals. It is crucial for your metabolism and general health condition.',
				},
				{
					id: 'metabolic',
					title: 'Metabolic age',
					img: '',
					text: 'Your Metabolic Age: ',
					measure: 'year',
					textInfo: 'The metabolic age determines how old your body really feels. Your body performance and habits lead to a certain condition of your metabolism. If metabolic age is higher than your actual age, it indicates you might have a slower metabolism than it should be. In this case, we recommend to boost it with special exercises and focus on a low-calorie meal plan. If the metabolic age is equal to or lower than your actual one, then your metabolism is in a good condition and you should keep up a good work.',
				},
				{
					id: 'calories',
					title: 'Calories',
					img: '',
					text: 'Daily norm: ',
					measure: 'cal',
					textInfo: 'Calories are within a recommended range of +/-100 as it is practically impossible to track them exactly. Following the meal plan, you should keep your daily calories consumption within this range. It was calculated based on your body measurements, lifestyle, and goals.',
				}
			],
			warn: {
				title: 'Extra weight may increase the probability of some diseases',
				items: ['Heart stroke','High Blood Pressure','Type 2 diabetes']
			}
		},
		lossEffect: {
			title: 'Here is how BodyFit provides double weight loss effect',
			items: [
				{
					imgSrc: 'https://bodyfitplan.me/wp-content/uploads/2018/12/Belly-fat-1.png',
					text: `<p>
								<span class='loss-effect__item-text_pink'>
								Visceral fat</span> surrounds your organs and causes extra body volume. It is dangerous for your health and hormonal balance.
								<span class='loss-effect__item-text_pink'> According to your profile,</span> you still have a good chance to drastically burn it. We have already suggested a 
								<span class='loss-effect__item-text_pink'> personalized meal plan for your body type</span> to trigger both underskin and visceral fat loss.
							</p>`
				},
				{
					imgSrc: 'https://bodyfitplan.me/wp-content/uploads/2018/12/Belly-fat-1.png',
					text: `<p>
								<span class='loss-effect__item-text_pink'>
								Visceral fat</span> surrounds your organs and causes extra body volume. It is dangerous for your health and hormonal balance.
								<span class='loss-effect__item-text_pink'> According to your profile,</span> you still have a good chance to drastically burn it. We have already suggested a 
								<span class='loss-effect__item-text_pink'> personalized meal plan for your body type</span> to trigger both underskin and visceral fat loss.
							</p>`
				},
				{
					text: `<p>
									Over <span class='loss-effect__item-text_pink'>$750 000</span> were invested in research and development of weight loss algorithm to reach
									100% personalization and efficiency for:
								</p>`,
					reasonsList: [
						'New mothers',
						'Genetically overweight people',
						'Fat food lovers',
						'Everyone who hates physical activities',
					]
				}
			]
		},
		benefits: {
			title: 'Proven side benefits:', 
			items: [
				{
					title: 'Improved sex drive',
					text: 'A 2012 Penn State study focusing on infertility found that women who lost weight experienced improved sexual function. Many saw a notable change in sexual desire and arousal. Also, high cholesterol causes plaque to build up in your blood vessels, which then slows blood flow to your genitals making it more difficult to get aroused and have an orgasm.',
				},
				{
					title: 'Improved sex drive',
					text: 'A 2012 Penn State study focusing on infertility found that women who lost weight experienced improved sexual function. Many saw a notable change in sexual desire and arousal. Also, high cholesterol causes plaque to build up in your blood vessels, which then slows blood flow to your genitals making it more difficult to get aroused and have an orgasm.',
				},
				{
					title: 'Improved sex drive',
					text: 'A 2012 Penn State study focusing on infertility found that women who lost weight experienced improved sexual function. Many saw a notable change in sexual desire and arousal. Also, high cholesterol causes plaque to build up in your blood vessels, which then slows blood flow to your genitals making it more difficult to get aroused and have an orgasm.',
				},
			]
		},
		gettingPack: {
			title: 'What you get',
			items: [
				{
					imgSrc: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf86.png',
					title: '100% Personalized meal plan',
					subtitle: 'access will be via email',
					text: `Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas`
				},
				{
					imgSrc: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf86.png',
					title: 'Metabolism-Boosting Exercises',
					subtitle: 'for even faster results',
					text: `Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas`
				},
				{
					imgSrc: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf86.png',
					title: 'Detailed Instruction',
					subtitle: '',
					text: `Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas
							Younger and cleaner look begins with nutrition change. 
							Internal organs get healthier and contribute to the respective skin areas`
				}
			]
		},
		getStart: {
			title: 'Start BodyFit today to:',
			items: {
				man: [
					'Improve your health',
					'Be the king on the beach',
					'Get attention from handsome girls',
					'Begin a new happy life'
				],
				woman: [
					'Improve your health',
					'Be the queen on the beach',
					'Get attention from handsome guys',
					'Begin a new happy life'
				]
			}
		},
		oftenAsk: {
			title: 'People often ask',
			userImg: 'https://bodyfitplan.me/wp-content/uploads/2019/07/thinking-face_1f914.png',
			bodyfitImg: 'https://bodyfitplan.me/wp-content/uploads/2019/07/BF_userpic.svg',
			items: [
				{
					user: 'Where and when do I get my meal plan?',
					bodyfit: 'You get an instant access to your meal plan. We also provide a link via email that comes immediately.',
				},
				{
					user: 'Where and when do I get my meal plan?',
					bodyfit: 'You get an instant access to your meal plan. We also provide a link via email that comes immediately.',
				}
			]
		},
		testimonial: [
			{
				name: 'Teresa Taller',
				age: '45',
				avatar: 'https://bodyfitplan.me/wp-content/uploads/2018/07/2.png',
				text: '’17 kg gone by summer and my son is not ashamed of me anymore’'
			},
			{
				name: 'Teresa Taller',
				age: '45',
				avatar: 'https://bodyfitplan.me/wp-content/uploads/2018/07/2.png',
				text: '’17 kg gone by summer and my son is not ashamed of me anymore’'
			},
			{
				name: 'Teresa Taller',
				age: '45',
				avatar: 'https://bodyfitplan.me/wp-content/uploads/2018/07/2.png',
				text: '’17 kg gone by summer and my son is not ashamed of me anymore’'
			}
		],
		payment: {
			gender: {
				man: {
					img: '../images/man-meat.svg',
				},
				woman: {
					img: '../images/woman-payment.svg',
				}
			},
			title: 'Get your personalized weight loss kit:',
			price: {
				current: 30,
				sale: '9.99',
				currency: '$',
				items: [
					'Personalized Meal Plan',
					'Metabolism Boosting Exercises',
					'Detailed Instruction'
				]
			}
		},
		guarantee: {
			title: '100% money-back guarantee',
			text: 'Probably, you have already tried many other ways to lose weight and got disappointed with wasting money. We are so ensured in BodyFit quality that we are ready to completely refund you within 30 days after purchase in case you don’t get visible results and can demonstrate that you have followed our plan.',
			preLinkText: 'Find more about the applicable limitations in our',
			linkText: 'money-back policy',
			team: 'BodyFit team',
			img: 'https://bodyfitplan.me/wp-content/themes/bodyfit/assets/dist/img/general/badge.png'
		},
		paymentBy: [
			{
				title: 'https',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-08.svg'
			},
			{
				title: 'SSL secure convention',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-09.svg'
			},
			{
				title: 'mcAfee',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-04.svg'
			},
			{
				title: 'norton',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-12.svg'
			},
			{
				title: 'paypal',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-01.svg'
			},
			{
				title: 'visa',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-02.svg'
			},
			{
				title: 'mastercard',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-05.svg'
			},
			{
				title: 'maestro',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-03.svg'
			},
			{
				title: 'apple-pay',
				img: 'https://logos-download.com/wp-content/uploads/2016/09/Apple_Pay_logo_gray.png'
			},
			{
				title: 'american express',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-10.svg'
			},
			{
				title: 'JCB',
				img: 'https://bodyfitplan.me/wp-content/uploads/2018/07/logo-11.svg'
			},
			{
				title: 'google pay',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Google_Pay_%28GPay%29_Logo.svg/1280px-Google_Pay_%28GPay%29_Logo.svg.png'
			},
		]
	},
	mealPlan: {
		heading: 'Personalized meal plan',
		notification: 'You can also access your meal plan via email that you received. If not received, please contact',
		popup: {
			min: 'min',
			cal: 'cal',
			values: ['proteins', 'carbs', 'fats'],
			essential: 'essential ingredients',
			taste: 'Ingredients to your taste',
			preparation: 'preparation',
		},
		downloads: ['Download exercises', 'Download meal plan', 'Download insructions'],
		recomendations: {
			title: 'Recomendations',
			text: 'This is your meal plan that we customized individually for you. Always consult your doctor following any nutrition or exercise plan. Your personalized meal plan contains dishes based on your choice. Click on a dish to see the recipe. We calculated the food according to your parameters. In order to benefit from a well-balanced diet properly, check our tips below.',
			item1: {
				text: 'Your average portion limit should not exceed:',
				points: [ 'Breakfast – 0.55 lb (250 g)',
				'Lunch – 0.8 lb (350 g)',
				'Lunch Side Dish – 0.2 lb (100 g)',
				'Snack – 0.2 lb (100 g)',
				'Dinner – 0.4 lb (200 g)',
				'Dinner Side Dish – 0.4 lb (200 g)',
				'Late Snack – 0.2 lb (100 g)' ]
			},
			items: ['You should not feel hunger, but also eating too often may be harmful to the program. That’s why we recommend eating every 2-3 hours. You should abstain from alcohol when following the plan. If you are in a situation you cannot refuse an offer to drink, please limit yourself with a glass of red wine.', 'Essential products are recommended based on your preferences. Follow the plan for best results. However, you keep the right to substitute your ‘essential ingredients’ with a respective position from other days. ‘Ingredients to your taste’ can be ignored if you dislike.', 'We recommend drinking a glass of lemon water just after waking up. This will help boost your metabolism. Do not ignore the recommended daily water amount to be consumed. Note that other beverages such as tea, coffee or juice cannot be counted as water.', 'Our key recommendation is physical activity. Any meal program becomes more efficient when combined with fitness, running or at least regular walking. We provide an individual list of home exercises to boost your metabolism. These exercises are essential for weight loss and should be done on a regular basis, at least 5 times a week to achieve your goals.', 'Do not forget to sleep properly. We strongly recommend falling asleep at 11 pm. You should sleep at least 7 hours to recover physically and mentally. This will reduce the stress you feel and infuse power to your body.']
		}
	},
	contactUs: {
		title: 'Contact us',
		text: 'We will be glad to assist you via email. Please send your questions and feedbacks to',
		email: 'support@bodyfitplan.me',
	},
	thanksPage: {
		title: 'Thank you!',
		firstSubtitle: 'Payment has been successfully processed.',
		secondSubtitle: 'Your personalized Bodyfit transformation kit has been sent to your email, as well as a receipt for your purchase.',
		notification: {
			titleWarning: 'Important',
			title: 'Make sure you received the meal plan',
			textBeforeEmail: 'Please check your ',
			textAfterEmail: '<p> and  it’s spam folder for the meal plan. Some email domains (e. g. <b><u>@hotmail</u></b>) may face delivery issues.</p>',
			textBottom: 'In case you have any questions contact ',
			email: 'support@bodyfitplan.me',
			btnNoTitle: 'If not received',
			btnNoText: 'click here to resend',
			btnNoInner: 'resend',
			btnOkTitle: 'If received',
			btnOkText: 'click here',
			btnOkInner: 'see<br>meal plan',
		}
	},
	helpBtn: {
		title: 'Help',
	},
	paymentPage: {
		textBeforeEmail: 'The Bodyfit Plan will be sent to ',
		textAfterEmail: ' after payment',
		buttonText: 'edit email',
		notifyFirst: 'One-time payment',
		notifySecond: 'No hidden fees',
		price: '$9',
		priceSup: '99',
		priceText: 'Total price to be charged',
		accept: 'By proceeding with payment I hereby confirm I accept the ',
		policies: 'Terms & Policies of the service',
	},
};


export default data;