import React, { useEffect, useState } from "react"
import DashboardLayout from '../../../layouts/Dashboard'
import Chart from "react-apexcharts";

export default function Dashboard(props){
  const { innerWidth: width } = window;

  const chartOptions = {
    chart: {
      id: "basic-bar",
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
    series: [{
        name: 'Pendapatan',
        data: [40, 50, 35, 60, 35, 50, 40]
    }]
  };

  const chartSampahKu = {
    ...chartOptions,
    colors: ['#58DC77'],
    xaxis: {
      labels: {
        show:false,
      },
      axisBorder: {
			show:false
      },
      axisTicks: {
        show:false
      },
    },
    yaxis: {
      labels: {
        show:false,
      },
    },
    show:false,
    dataLabels: {
      enabled: false
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
    series: [{
      name: 'Ton',
      data: [50, 100, 60, 150, 100, 200]
    }],
  }

  const chartPointKu = {
    ...chartOptions,
    colors: ['#52DBB2'],
    xaxis: {
      labels: {
        show:false,
      },
      axisBorder: {
			show:false
      },
      axisTicks: {
        show:false
      },
    },
    yaxis: {
      labels: {
        show:false,
      },
    },
    show:false,
    dataLabels: {
      enabled: false
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
    series: [{
      name: 'Ton',
      data: [50, 100, 60, 150, 100, 200]
    }],
  }

  const chartOrderan = {
    ...chartOptions,
    colors: ['#52CADB'],
    xaxis: {
      labels: {
        show:false,
      },
      axisBorder: {
			show:false
      },
      axisTicks: {
        show:false
      },
    },
    yaxis: {
      labels: {
        show:false,
      },
    },
    show:false,
    dataLabels: {
      enabled: false
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
    series: [{
      name: 'Ton',
      data: [50, 100, 60, 150, 100, 200]
    }],
  }

  const chartPickup = {
    ...chartOptions,
    colors: ['#5268DB'],
    xaxis: {
      labels: {
        show:false,
      },
      axisBorder: {
			show:false
      },
      axisTicks: {
        show:false
      },
    },
    yaxis: {
      labels: {
        show:false,
      },
    },
    show:false,
    dataLabels: {
      enabled: false
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
    series: [{
      name: 'Ton',
      data: [50, 100, 60, 150, 100, 200]
    }],
  }

  useEffect(() => {
    setTimeout(() => {
      // document.getElementById('burger').click()
      // console.log('execute click id burder')
      setWithChart('100%')
    }, 1000)
  })

  const [withChart, setWithChart] = useState(width <= 425 ? 220 : 320)
  return (
    <>
      <DashboardLayout {...props}>
        <div className="page-content">
          <section className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="card h-100 mb-4 mb-lg-0">
                            <div className="card-body p-0">
                              <div className="row justify-content-between">
                                <div className="col">
                                  <h5 style={{color: '#58dc77'}}>Sampahku</h5>
                                  <h2>400 Ton</h2>
                                </div>
                                <div className="col text-end">
                                  <h5 className="text-muted">Minggu ini</h5>
                                  <h5>23 Ton</h5>
                                </div>
                              </div>
                              <div style={{minHeight: "165px"}}>
                                <Chart options={chartSampahKu} series={chartSampahKu.series} type="area" height="150" width={withChart}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="card h-100 mb-4 mb-lg-0">
                            <div className="card-body p-0">
                              <div className="row justify-content-between">
                                <div className="col">
                                  <h5 style={{color: '#52dbb2'}}>Poinku</h5>
                                  <h2>55.000</h2>
                                </div>
                                <div className="col text-end">
                                  <h5 className="text-muted">Minggu ini</h5>
                                  <h5>2.000</h5>
                                </div>
                              </div>
                              <div style={{minHeight: "165px"}}>
                                <Chart options={chartPointKu} series={chartPointKu.series} type="area" height="150" width={withChart}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="card h-100 mb-4 mb-md-0">
                            <div className="card-body p-0">
                              <div className="row justify-content-between">
                                <div className="col">
                                  <h5 style={{color: "#52cadb"}}>Orderan</h5>
                                  <h2>110</h2>
                                </div>
                                <div className="col text-end">
                                  <h5 className="text-muted">Minggu ini</h5>
                                  <h5>20</h5>
                                </div>
                              </div>
                              <div style={{minHeight: "165px"}}>
                                <Chart options={chartOrderan} series={chartOrderan.series} type="area" height="150" width={withChart}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="card h-100 mb-0">
                            <div className="card-body p-0">
                              <div className="row justify-content-between">
                                <div className="col">
                                  <h5 style={{color: "#5268db"}}>Pick Up</h5>
                                  <h2>140 kg</h2>
                                </div>
                                <div className="col text-end">
                                  <h5 className="text-muted">Minggu ini</h5>
                                  <h5>22 kg</h5>
                                </div>
                              </div>
                              <div style={{minHeight: "165px"}}>
                                <Chart options={chartPickup} series={chartPickup.series} type="area" height="150" width={withChart}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col-12 col-sm-6">
                          <h2>Pendapatan</h2>
                        </div>
                        <div className="col-12 col-sm-6 text-md-end"><span className="text-muted">Tahun</span> <span className="fw-bold">2021</span></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <Chart options={chartOptions} series={chartOptions.series} type="area" height="300" width={withChart}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DashboardLayout>
    </>
  )
}