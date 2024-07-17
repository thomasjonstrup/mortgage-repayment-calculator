import {formatCurrency} from './format';

export const calculateMortgage = (
	amount: number,
	term: number,
	interestRate: number,
	type: 'repayment' | 'interest'
): {monthlyPayment: string; totalPayment: string} => {
	const monthlyInterestRate = interestRate / 100 / 12;
	const numberOfPayments = term * 12;

	let payment: number = 0;

	if (type === 'repayment') {
		payment =
			(amount *
				(monthlyInterestRate *
					Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
			(Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
	} else {
		payment = amount * monthlyInterestRate;
	}

	const monthlyPayment: string = formatCurrency(payment);
	const totalPayment: string = formatCurrency(payment * numberOfPayments);

	return {
		monthlyPayment,
		totalPayment,
	};
};
