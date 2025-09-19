import React from "react";
import Chart from "react-google-charts";
import { useState,useEffect } from "react";

const LineChart = ({historicalData}) => {
  const [data, setData] = useState([["DATE", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["DATE", "Prices"]];
    if(historicalData.prices){
        historicalData.prices.map((items => {
            dataCopy.push([`${new Date(items[0]).toLocaleDateString().slice(0,-5)}`,items[1]])
        }))
        setData(dataCopy);
    }
  }, [historicalData]);

  return (

    <Chart
    chartType="LineChart"
    data={data}
    height="100%"
    legendToggle
    />
  )
};

export default LineChart;
