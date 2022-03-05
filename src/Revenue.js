import React, { useState, useEffect } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const Revenue = () => {
    const [ url, setUrl ] = useState([]);
    useEffect(()=>{
        fetch('https://mohsin324.github.io/DashBoard/Revenue.json')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setUrl(data);
            console.log(data);
        })
        .catch((error)=>{
            alert(error);
        });

    },[]);
    const chartConfigs = {
        type: "line",
        width: "1200",
        height: "400",
        dataFormat: "json",
        dataSource: url
    }
    return(
        <div>
            <ReactFC {...chartConfigs} />
        </div>
    );
}
export default Revenue;