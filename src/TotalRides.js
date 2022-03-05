import React, { useState, useEffect } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const TotalRides = () => {
    const [ url, setUrl ] = useState([]);
    useEffect(()=>{
        fetch('https://mohsin324.github.io/DashBoard/TotalRides.json')
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
        type: "Bar3d",
        width: "600",
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
export default TotalRides;