import React from 'react'
import { Doughnut, Pie, Bubble, Bar } from 'react-chartjs-2'
import { Chart, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js'
import Labels from './Labels'

Chart.register(ArcElement, CategoryScale, LinearScale, BarElement)

const config = {
  data: {
    datasets: [{
      data: [25, 25, 50],
      backgroundColor: [
        'gray',
        'blue',
        'green'
      ],
      hoverOffset: 5,
      borderRadius: 30,
      spacing: 15,
      borderColor: 'transparent'
    }]
  },
  options: {
    cutout: 150,
  }
}

function DoughnutChart() {
  return (
    <div>
      <Doughnut {...config}></Doughnut>
      <Labels></Labels>
    </div>
  )
}

function BarChart() {
  return (
    <div>
      <Bar {...config}></Bar>
      <Labels></Labels>
    </div>
  )
}

export default function graphs() {
  return (
    <div>
      {/* <h1 className='pb-5'>Chart Title</h1> */}
      {DoughnutChart()}
      
    </div>
  )
}
