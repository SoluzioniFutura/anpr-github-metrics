import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const CustomTooltip = (props) => {
  const { openIssues, closedIssues, totalIssues, name } = props.payload[0] ? props.payload[0].payload : {}
  return (
    <div className = { "custom-tooltip card" } style = {{ "background": "#ffffff" }}>
      <div className = { "card-content" }>
        <p className = { "label" }>{ name }</p>
        <p className = { "label" }>Open Issues: { openIssues }</p>
        <p className = { "label" }>Closed Issues: { closedIssues }</p>
        <p className = { "label" }>Total Issues: { totalIssues }</p>
      </div>
    </div>
  )
}


const Chart = ({ data }) => (
  <ResponsiveContainer width = { "100%" } height={500}>
    <AreaChart width={ "80%" } height = { 300 } data = { data }>
      <XAxis dataKey = { "name" } />
      <YAxis domain = { [0, 100] } />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={ <CustomTooltip/> }/>
      <Legend align = { "right" } layout = { "vertical" } verticalAlign = { "middle" } margin = {{ "left": "5%" }}/>
      <Area name = { "Open Issues Percentage" } type="monotone" dataKey="openIssuesPercentage" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
)

export default Chart
