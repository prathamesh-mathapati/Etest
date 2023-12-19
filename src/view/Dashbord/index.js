import React, { useState } from 'react'
import './style.scss'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie
} from 'recharts'
import ReactECharts from 'echarts-for-react'

import { BsArrowReturnLeft } from 'react-icons/bs'
import { BiCoinStack } from 'react-icons/bi'
import { GiProfit } from 'react-icons/gi'
import { AiOutlineArrowLeft, AiOutlineCloudUpload } from 'react-icons/ai'
import { CgCreditCard } from 'react-icons/cg'

export const Dashboard = () => {
  let data = [
    { name: 'January', uv: 400, pv: 2400, amt: 2400 },
    { name: 'February', uv: 20, pv: 2400, amt: 2400 },
    { name: 'March', uv: 40, pv: 2400, amt: 2400 },
    { name: 'May', uv: 40, pv: 2400, amt: 2400 },
    { name: 'June', uv: 40, pv: 2400, amt: 2400 },
    { name: 'July', uv: 40, pv: 2400, amt: 2400 },
    { name: 'August', uv: 40, pv: 2400, amt: 2400 },
    { name: 'September', uv: 40, pv: 2400, amt: 2400 },
    { name: 'October', uv: 40, pv: 2400, amt: 2400 }
  ]

  const data02 = [
    {
      name: 'Group A',
      value: 2400
    },
    {
      name: 'Group B',
      value: 4567
    },
    {
      name: 'Group C',
      value: 1398
    },
    {
      name: 'Group D',
      value: 9200
    },
    {
      name: 'Group E',
      value: 3908
    },
    {
      name: 'Group F',
      value: 4800
    }
  ]
  const [count, setCount] = useState(0)

  function onChartReady (echarts) {
    console.log('echarts is ready', echarts)
  }

  function onChartClick (param, echarts) {
    setCount(count + 1)
  }

  function onChartLegendselectchanged (param, echarts) {}
  const option = {
    title: {
      text: 'Product sales',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['T-shart', 'Pan', 'glass']
    },
    series: [
      {
        name: 'Products',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'T-shart' },
          { value: 310, name: 'Pan' },
          { value: 234, name: 'glass' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  return (
    <div className='dashboard-main'>
      <div className='dashboard-line-chart'>
        <h3>This Week Sales & Purchases</h3>
        <LineChart
          width={1200}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 20, left: 20 }}
        >
          <Line type='monotone' dataKey='uv' stroke='#8834FF' />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='name' />
          <YAxis />
        </LineChart>
      </div>
      <div className='new-show-sles-product'>
        <ReactECharts
          option={option}
          style={{ height: 300 }}
          onChartReady={onChartReady}
          onEvents={{
            click: onChartClick,
            legendselectchanged: onChartLegendselectchanged
          }}
        />{' '}
      </div>

      <div
        style={{
          background: '#FFF',
          borderRadius: '10px',
          padding: '0px 20px 20px 20px'
        }}
      >
        <div className='sells-heading'>
          <h3>Sales Summery</h3>
          <button>
            <AiOutlineCloudUpload /> Export
          </button>
        </div>

        <div className='sells-info-cart'>
          <div className='revenue-card commen-card'>
            <span>
              <BiCoinStack />
            </span>
            <p>Sales</p>
            <h3>$10</h3>
          </div>
          <div className='sale-return-card commen-card'>
            <span>
              <BsArrowReturnLeft />
            </span>
            <p>Sale Return</p>
            <h3>$10</h3>{' '}
          </div>
          <div className='purchase-return commen-card'>
            <span>
              <AiOutlineArrowLeft />
            </span>
            <p>Purchases Returns</p>
            <h3>$10</h3>{' '}
          </div>
          <div className='profit-card commen-card'>
            <span>
              <GiProfit />
            </span>
            <p>Sale Return</p>
            <h3>$10</h3>{' '}
          </div>

          <div className='total-card commen-card'>
            <span>
              <CgCreditCard />
            </span>
            <p>Total Expense</p>
            <h3>$10</h3>{' '}
          </div>
        </div>
      </div>

      <div>
        <h3>Top 5 Selling Product</h3>
      </div>
      {/* <div className='dashboard-pie-chart'>
        <h3>Top Selling Products (2023)</h3>
        <PieChart width={400} height={200}>
          <Pie
            data={data02}
            dataKey='value'
            nameKey='name'
            cx='60%'
            cy='50%'
            innerRadius={80}
            outerRadius={100}
            fill='#8834FF'
            label
          />
        </PieChart>
      </div> */}
    </div>
  )
}
