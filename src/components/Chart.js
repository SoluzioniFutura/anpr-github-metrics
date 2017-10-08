import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const CustomTooltip = (props) => {
  const { openIssues, closedIssues, totalIssues, name } = props.payload[0] ? props.payload[0].payload : {}
  return (
    <div className={"custom-tooltip"} style = {{ "background": "#ffffff" }}>{"\n      "}<p className={"label"}>{ name }</p>{"\n      "}<p className={"label"}>{"Open Issues: "}{ openIssues }</p>{"\n      "}<p className={"label"}>{"Closed Issues: "}{ closedIssues }</p>{"\n      "}<p className={"label"}>{"Total Issues: "}{ totalIssues }</p>{"\n    "}</div>
  )
}


const Chart = ({ data }) => (
  <ResponsiveContainer width = { "100%" } height={500}>{"\n    "}<AreaChart width={ "80%" } height = { 300 } data = { data }>{"\n      "}<XAxis dataKey = { "name" } />{"\n      "}<YAxis domain = { [0, 100] } />{"\n      "}<CartesianGrid strokeDasharray={"3 3"} />{"\n      "}<Tooltip content={ <CustomTooltip/> }/>{"\n      "}<Legend align = { "right" } layout = { "vertical" } verticalAlign = { "middle" } margin = {{ "left": "5%" }}/>{"\n      "}<Area name = { "Open Issues Percentage" } type={"monotone"} dataKey={"openIssuesPercentage"} stroke={"#8884d8"} fill={"#8884d8"} />{"\n    "}</AreaChart>{"\n  "}</ResponsiveContainer>
)

export default Chart
