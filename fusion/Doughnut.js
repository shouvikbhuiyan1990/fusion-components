import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#D7DBDD',
		'#34495E',
		'#5F6A6A'
		],
		hoverBackgroundColor: [
		'#626567',
		'#4D5656',
		'#1B2631'

		]
	}]
};

export default React.createClass({
  displayName: 'Doughnut',

  render() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
});