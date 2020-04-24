import React, { Component } from 'react';
import axios from '../../axios';
import Option from './Option/Option';
import Effect from './Effect/Effect';
import { calculateRate } from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styles from './home.module.css';
import RightImg from './RightImg';

class Home extends Component {
	state = {
		coinsType: [],
		rates: '',
		amount: '',
		from: "EUR",
		to: "EUR",
		output: '0',
		outputShow: false,
	};

	componentDidMount() {
		axios
			.get('/')
			.then((response) => {
				let ct = [response.data.base, ...Object.keys(response.data.rates)]
				let r = { ...response.data.rates, EUR: 1 }
				this.setState({ coinsType: ct , date: response.data.date, rates: r });
			})
			.catch((err) => {
				console.log(err);
			});
	}
	
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			let { rates, amount, from, to } = this.state;
			let output = rates.EUR / rates[from] * rates[to]
			this.setState({ output: output })
		})
	}

	render() {
		const { date, output } = this.state;
		const coinsOptions = this.state.coinsType.map(coin => <option key={coin}>{coin}</option>)
		return (
			<>
				<div className={styles.wholeThing}>
					<RightImg styles={styles} date={date} />

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
								name="amount"
								className={styles.inputAmount}
								id="standard-basic"
								type="number"
								onChange={this.handleChange}
								required
								placeholder="Enter Amount"
							/>

							<div className={styles.Second}>
								{/* <label> Choose Currency: </label> */}
								<select name="from" onChange={this.handleChange}>
									{coinsOptions}
								</select>
							</div>

							<div className={styles.Third}>
								{/* <label>Choose Exchange Rate:</label> */}
								<select name="to" onChange={this.handleChange} className={styles.Secondselect}>
									{coinsOptions}
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
