/* global Plotly:true */

import ReactTable from 'react-table'
import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPlotlyComponent from 'react-plotly.js/factory';
import './BenthicTimeSeriesGraph.css'
const Plot = createPlotlyComponent(Plotly);


class BenthicTimeSeriesGraph extends Component {
    constructor(props) {
      super(props);
      this.state = {
          firstYear: 2010,
          secondYear: 2018
      };

      this.computeLineGraphData = this.computeLineGraphData.bind(this);
      this.changeFirstYear = this.changeFirstYear.bind(this);
      this.changeSecondYear = this.changeSecondYear.bind(this);
    }

    changeFirstYear(event, value) {
        this.setState({
            firstYear: value
        })
    }

    changeSecondYear(event, value) {
        this.setState({
            secondYear: value
        })
      }

    // Need to return AVG value per year for the filtered type
    computeLineGraphData(xValues) {
        let properXValues = []
        let yValues = []
        let yValuesSE = []
        xValues.map((year, i) => {
            let tempSum = 0;
            let tempSE = 0;
            let total = 0;
            this.props.data.map((entry, j) => {
                if(entry.Year === year) {
                    tempSum += entry[this.props.coverType]
                    tempSE += entry[this.props.SEType]
                    total+=1
                }
            })
            let avgVal = tempSum/total
            let avgSE = tempSE/total
            if (avgVal && avgSE) {
                properXValues.push(year)
                yValues.push(tempSum/total)
                yValuesSE.push(tempSE/total)
            }
        })
        return [properXValues, yValues]
    }

    generateXValues(year1, year2) {
        let list = []
        for (let i = year1; i <= year2; i++) {
            list.push(i)
        }
        console.log(list);
        return list
    }

    render() {
        const xValues = this.generateXValues(this.state.firstYear, this.state.secondYear)
        const [properXValues, yValues] = this.computeLineGraphData(xValues);
    
        console.log('vals, ', xValues, yValues);
        return (
            <div className='timeseries-graph'>
                <Plot
                data={[
                {
                    type: 'line',
                    x: properXValues,
                    y: yValues
                }
                ]}
        
                layout={{
                title: `Time Series Trend for ${this.props.coverType} Between ${this.state.firstYear} and ${this.state.secondYear}`,
                font: {
                    family: 'Arial',
                    size: 14,
                    color: '#000'
                },
                plot_bgcolor: 'white'
                }}
            />

            <MuiThemeProvider>
                <Slider 
                    min={2000}
                    max={this.state.secondYear}
                    step={1}
                    className="dual-slider"
                    value={this.state.firstYear} 
                    onChange={this.changeFirstYear} />
            <span> Slider value is {this.state.firstYear} </span>
                <Slider 
                    min={this.state.firstYear}
                    max={2018}
                    step={1}
                    className="dual-slider"
                    value={this.state.secondYear} 
                    onChange={this.changeSecondYear} />
            </MuiThemeProvider>
            <span> Slider value is {this.state.secondYear} </span>
        </div>
        )
    }
}

export default BenthicTimeSeriesGraph;
