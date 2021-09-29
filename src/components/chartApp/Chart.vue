<template>
	<div class="small">
		<LineChart v-bind="lineChartProps" />
		<button @click="getRealtimeData">getData</button>
	</div>
</template>
		
<script>
import { LineChart, useLineChart } from "vue-chart-3";
import io from "socket.io-client";
import { computed, ref } from "vue";
import { Chart, registerables } from "chart.js";

var socket = io.connect("http://localhost:4000");

Chart.register(...registerables);

export default {
	name: 'Chart',
	components: {
		LineChart
	},
	
	setup() {
		let dataLabels = ref([]);
		let dataValues = ref([]);

		const dataCollection = computed(() => ({
			labels: dataLabels.value,
				datasets: [
					{
						label: "sample legnend",
						backgroundColor: "#1A73E8",
						data: dataValues.value,
					},
				]
		}));

		const lineRef = ref();
		const options = computed(() => ({
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'vue-chart-3',
				},
			},
		}));

		const { lineChartProps, lineChartRef } = useLineChart({
			chartData: dataCollection,
			options,
		});

		const fillData = (fetchedData) => {
			const newArray = [...dataValues.value, fetchedData]
			return (newArray);
			// return ([getRandomChartValues(fetchedData), getRandomChartValues(fetchedData)]);
		};

		const getRealtimeData = () => {
			socket.on("newdata", fetchedData => {
				console.log("dataValues: ", dataValues);
				dataValues.value = fillData(fetchedData);
				dataLabels.value = Array.from({length: dataValues.value.length}, (v, i) => i);
				// dataValues = fillData(fetchedData); 
				// console.log(lineChartRef.value.chartInstance);
			})
		}
		const getRandomChartValues = (number) => {
			return Math.floor(Math.random() * number)
		}

		return {
			dataCollection,
			options,
			lineRef,
			lineChartProps,
			lineChartRef,
			fillData,
			getRealtimeData,
			getRandomChartValues
		}
	}
};
</script>
<style>
.small {
	max-width: 600px;
	margin: 150px auto;
	border: 1px solid black;
}
</style>