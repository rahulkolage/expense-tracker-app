import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    // for loop is on Array so used 'of' in loop
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // month number used as index in chartDataPoints to update value
        chartDataPoints[expenseMonth].value += expense.amount; // sum of amount of same months
    }

    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;