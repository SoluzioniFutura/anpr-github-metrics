import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomTooltip = (props) => {
  const { openIssues, closedIssues, totalIssues, name } = props.payload[0] ? props.payload[0].payload : {}
  return (
    <div className="custom-tooltip" style = {{ background: '#ffffff' }}>
      <p className="label">{ name }</p>
      <p className="label">Open Issues: { openIssues }</p>
      <p className="label">Closed Issues: { closedIssues }</p>
      <p className="label">Total Issues: { totalIssues }</p>
    </div>
  )
}


const Chart = ({ data }) => (
  <ResponsiveContainer width = { '100%' } height={500}>
    <BarChart width={ '80%' } height = { 300 } data = { data }>
      <XAxis dataKey = { 'name' } />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={ <CustomTooltip/> }/>
      <Legend align = { 'right' } layout = { 'vertical' } verticalAlign = { 'middle' } margin = {{ left: '5%' }}/>
      <Bar name = { 'Open Issues Percentage' } dataKey = { 'openIssuesPercentage' } stackId="a" fill="#82ca9d" />
      <Bar name = { 'Closed Issues Percentage' } dataKey = { 'closedIssuesPercentage' } stackId="a" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
)

export default Chart
