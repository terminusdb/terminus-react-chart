import React , {useState} from 'react';
import { Container} from "reactstrap";
import ChartElements from "./chartComponents/ChartElements"

import  {ResponsiveContainer, Rectangle,Surface,
	     Symbols,ComposedChart, Line, Area, XAxis, YAxis,
	     CartesianGrid, Tooltip, Legend, Bar} from  "recharts";

import XAxisLabel from './chartComponents/XAxisLabel'
import SelectableLegendItem from './chartComponents/SelectableLegendItem'

import ZoomSelection from './chartComponents/ZoomSelection'

import { SizeMe } from 'react-sizeme';
import ChartPointLabel from './chartComponents/ChartPointLabel'

import LegendComponent from './chartComponents/LegendComponent'

const ChartComponent = (props)=>{
	
	const activeZoom = () => {}//zoomToggle(!zoomIsActive);

	const chartConf=props.config || {};

	const chartRules=chartConf.rules || [];
  	
 	const chartEleConf=chartConf.chart || {};

	const onWheel=(e)=>{
  		const obj=e;

  	}

  const onMouseDown=(e)=>{
  }

  const onMouseMove = (e)=>{
  }

  const onMouseUp = (e)=>{
  
  }

   const payloadFormatter = (value,name,props)=>{
  	 return value
   };

 
  	const zoomBack=()=>{
	}

	const calculateGraph=()=>{
	}

  	
	let dataProvider = props.dataProvider || [];
		
	const zoomStyle = {}

	let zoomCurrentStyle = {fontSize:"18px"}
   
    const margin = chartEleConf.margin || {top: 10, right: 20, left: 40, bottom:100};
    const title = chartEleConf.title || ""

	return(<Container style={{height:"500px"}} fluid className="border">
          	<h4 >{title}</h4>
			<div className="chartContainer">
			  <div className="chartTools">
			      <div className="chartToolItem" style={zoomCurrentStyle} onClick={activeZoom}>
					<span className="fa fa-search-plus"  style={{cursor:'pointer'}} onClick={activeZoom}></span>
				  </div>
				  <div className="chartToolItem" style={{fontSize:"18px"}} onClick={zoomBack}>
					<span className="fa fa-undo"  style={{cursor:'pointer'}}></span>
				  </div>
			  </div>

			  <SizeMe monitorHeight={true}>{({ size }) =>
			  	<div className="zoomDivContainer">
				 <ResponsiveContainer height={size.height} width={size.width} aspect={size.width/size.height} >
					<ComposedChart					
						data={dataProvider}
						onMouseDown={onMouseDown}
						onMouseUp={onMouseUp}
						onMouseMove={onMouseMove}
			            margin={margin}>
			            
				      	{ChartElements(chartRules,dataProvider)}
				       <YAxis/>
				       <CartesianGrid strokeDasharray="3 3"/>
				       <Tooltip  labelFormatter={payloadFormatter}/>
			      	   <Legend wrapperStyle={{ top: '-45px' }} iconType="rectangle"  content={<LegendComponent />} />
			      </ComposedChart>
			     </ResponsiveContainer>
			    <div className="zoomDiv" style={zoomStyle} height="500px" onMouseUp={onMouseUp}/>
				</div>}
			</SizeMe>
			</div>
			</Container>
			)
}
export default ChartComponent