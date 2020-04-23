import React, { Component } from 'react';
import axios from '../../axios';
import Option from './Option/Option';
import Effect from './Effect/Effect';
import { calculateRate } from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styles from './home.module.css';

class Home extends Component {
	state = {
		rates: '',
		amount: '',
		from: '',
		to: '',
		output: '0',
		outputShow: false,
	};

	componentDidMount() {
		axios
			.get('/')
			.then((response) => {
				console.log(response.data.rates);
				this.setState({ date: response.data.date, rates: response.data.rates });
			})
			.catch((err) => {
				console.log(err);
			});
	}


	handleChange = (e) => {
		console.log(e.target.value);
		let { to } = this.state;
		console.log({to})
		let amount = e.target.value;
		let output = calculateRate(amount, to);
		console.log(output);
		this.setState({ amount: e.target.value, output: output });
	};

	selectFromChange = (e) => {
		console.log(e.target.value);
		let from = e.target.value;
		console.log('BASE:',from)
		let {to,amount} = this.state
			axios
				.get(`/?base=${from}`)
				.then((response) => {
					console.log('RESPONSE:',response.data.rates);
					let a = response.data.rates
					console.log('A',a)
					this.setState({ from: from, rates: response.data.rates,output: update });
				})
				.catch((error) => {
					console.log(error);
				});
				
				let update = calculateRate(amount, to);
				console.log({update})
				this.setState({
				output: update,to:to
			})
	};

	selectToChange = (e) => {
		const { amount } = this.state;
		let to = e.target.value;
		console.log(to);
		let update = calculateRate(amount, to);
		this.setState({ to: to, output: update });
	};

	render() {
		const { rates, to, from, output } = this.state;
		console.log(from);
		let { date } = this.state;
		if (date) date = date.replace(/-/g, '/');

		const orderedRates = Object.keys(rates).map((rateKey, i) => {
			return (
				<Option key={rateKey + i} value={rateKey}>
					{rateKey}
				</Option>
			);
		});
		console.log(orderedRates);

		const orderedToRates = Object.keys(rates).map((rateKey, i) => {
			return (
				<Option key={rateKey + i} value={rates[rateKey]}>
					{rateKey}
				</Option>
			);
		});

		return (
			<>
				<div className={styles.wholeThing}>
					<div className={styles.right}>
						<div className={styles.rightText}> Exchange </div>
						<div className={styles.Date}>
							<p>
								{' '}
								World bank rates <br /> Last update{' '}
								<span style={{ color: 'red', fontWeight: 'bold' }}> {date} </span>{' '}
							</p>
						</div>
					</div>

					<div className={styles.main}>
						<h1 style={{ textAlign: 'center' }}>
							{' '}
							Seriously Fast <br /> on the Spot <strong style={{ color: 'red' }}>
								{' '}
								Exchange{' '}
							</strong> Rates{' '}
						</h1>
						<div className={styles.form}>
							<input
								className={styles.inputAmount}
								id="standard-basic"
								type="number"
								onChange={this.handleChange}
								required
								placeholder="Enter Amount"
							/>

							<div className={styles.Second}>
								{/* <label> Choose Currency: </label> */}
								<select onChange={this.selectFromChange} value={from}>
									{orderedRates}
								</select>
							</div>

							<div className={styles.Third}>
								{/* <label>Choose Exchange Rate:</label> */}
								<select className={styles.Secondselect} value={to} onChange={this.selectToChange}>
									{orderedToRates}
								</select>
							</div>

							<div className={styles.Fourth}>
								<h4> Here You Go </h4>
								<div style={{ marginTop: '.75em' }}> {output} </div>
							</div>
						</div>
					</div>
					<footer> Developed Using Exchange Rate API </footer>
				</div>
			</>
		);
	}
}

export default Home;
