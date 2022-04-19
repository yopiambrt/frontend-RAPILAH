var optionsArea = {
	series: [{
		name: 'series1',
		data: [50, 100, 60, 150, 100, 200]
	}],
	chart: {
		height: 150,
		type: 'area',
		toolbar: {
			show:true,
		},
	},
	colors: ['#5350e9'],
	stroke: {
		width: 2,
	},
    grid: {
        show: false,
        padding: {
         left: 0,
         right: 0,
         bottom: 0,
         top:0,
        }
    },
	dataLabels: {
		enabled: false
	},
	xaxis: {
        show: false,
		type: 'datetime',
		categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"],
		axisBorder: {
			show:false
		},
		axisTicks: {
			show:false
		},
		labels: {
			show:false,
		},
	},
	show:false,
	yaxis: {
		labels: {
			show:false,
		},
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
};

var optionsChartBulanan = {
	series: [{
		name: 'Series',
        data: [40, 50, 35, 60, 35, 50, 40]
	}],
	chart: {
		height: 300,
		type: 'area',
	},
	colors: ['#52DBB2'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: .7,
            opacityTo: .5,
            stops: [0, 70, 100]
        }
    },
	stroke: {
		width: 2,
	},
    grid: {
        show: true,
        padding: {
            left: 16,
            right: 0,
            bottom: 0,
            top:0,
        }
    },
	dataLabels: {
		enabled: false
	},
	xaxis: {
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"],
	},
	yaxis: {
		labels: {
            formatter: function (value) {
                return value + "k";
              }
		},
	},
	tooltip: {
		x: {
			format: 'MM'
		},
	},
};

let optionsSampahku = {
	...optionsArea,
    series: [{
		name: 'Ton',
        data: [50, 100, 60, 150, 100, 200]
	}],
	colors: ['#58DC77'],
}
let optionsPoinku = {
	...optionsArea,
    series: [{
		name: 'Poin',
        data: [50, 100, 60, 150, 100, 200]
	}],
	colors: ['#52DBB2'],
}
let optionsOrderan = {
	...optionsArea,
    series: [{
		name: 'Orderan',
        data: [50, 100, 60, 150, 100, 200]
	}],
	colors: ['#52CADB'],
}
let optionsPickUp = {
	...optionsArea,
    series: [{
		name: 'Kg',
        data: [50, 100, 60, 150, 100, 200]
	}],
	colors: ['#5268DB'],
}

let optionsPendapatan = {
    ...optionsChartBulanan,
    series: [{
        name: 'Pendapatan',
        data: [40, 50, 35, 60, 35, 50, 40]
    }]
}

var chartPendapatan = new ApexCharts(document.querySelector("#chart-pendapatan"), optionsPendapatan);

var sampahku = new ApexCharts(document.querySelector("#chart-sampahku"), optionsSampahku);
var poinku = new ApexCharts(document.querySelector("#chart-poinku"), optionsPoinku);
var orderan = new ApexCharts(document.querySelector("#chart-orderan"), optionsOrderan);
var pickUp = new ApexCharts(document.querySelector("#chart-pickup"), optionsPickUp);

sampahku.render();
poinku.render();
orderan.render();
pickUp.render();
chartPendapatan.render();