import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
	const chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 68 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 10 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 10 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 10 },
	];

	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
