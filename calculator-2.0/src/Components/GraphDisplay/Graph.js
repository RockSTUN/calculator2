import React from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.handleRender = this.handleRender.bind(this);
    }
    
    
    
    handleRender(){
        if (!this.props.data.x){
            console.log('Please set the parameters')
        }
        else{
        let dataset = [];
        for (let i=0;i<this.props.data.x.length;i++){
            dataset.push([this.props.data.x[i],this.props.data.y[i]])
        }
        console.log(dataset)
        const h = 500;
        const w = 500;
        const padding = 60;
        var [xMIN, xMAX , yMIN, yMAX] = [0,0,0,0]
        if (Math.abs(this.props.data.x[0]) > Math.abs(this.props.data.x[this.props.data.x.length -1])){
            xMIN = -Math.abs(this.props.data.x[0])
            xMAX = Math.abs(this.props.data.x[0])
        }
        else{
            xMIN = -Math.abs(this.props.data.x[this.props.data.x.length -1])
            xMAX = Math.abs(this.props.data.x[this.props.data.x.length -1])
        }
        if (Math.abs(d3.min(this.props.data.y)) > Math.abs(d3.max(this.props.data.y))){
            yMIN = -Math.abs(d3.min(this.props.data.y))
            yMAX = Math.abs(d3.min(this.props.data.y))
        }
        else {
            yMIN = -Math.abs(d3.max(this.props.data.y))
            yMAX = Math.abs(d3.max(this.props.data.y))
        }
        
        var params = []
        document.getElementById('parameters').childNodes.forEach((n) => {
            console.log(n)
            if (n.id != 's'){
                let aux = {}
                aux[n.id] = n.value
                params.push(aux)
                
            }
            
        })
        params = (params.map((n) => Object.keys(n).map(v => `${v} = ${n[v]}`)))
        const element = d3.select('#selector').append('svg').attr('width', w).attr('height', h)
        const elementText = d3.select('#selector').append('h2').text(`Function: ${this.props.fn}`).append('h3').text(`Parameters: ${params}\nPace: ${this.props.pace}`)
        
        //Xaxis
        const xScale = d3.scaleLinear()
        xScale.domain([xMIN,xMAX])
        xScale.range([padding, w-padding])
        //Yaxis
        const yScale = d3.scaleLinear()
        yScale.domain([yMIN,yMAX])
        yScale.range([h-padding,padding])
        
        //plot data
        element.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d[0]))
        .attr("cy", d => yScale(d[1]))
        .attr("r", 3)
        
        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisLeft(yScale)
        
        element.append("g")
            .attr("transform", `translate(0, ${h/2})`)
            .call(xAxis);
        element.append("g")
            .attr("transform", `translate(${w/2}, 0)`)
            .call(yAxis)        
        
        }
        
    }
    render(){
        return <div id='selector'>
            <button onClick={this.handleRender} className={'btn btn-dark'}>Render</button>
        </div>
    }
}

const styles = {}

function mapStateToProps(state){
    return {
        data: state.data,
        fn: state.fn,
        fnParameters: state.fnParameters,
        pace: state.pace
    }
}

export default connect(mapStateToProps,null)(Graph);
