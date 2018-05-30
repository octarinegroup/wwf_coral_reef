/* global Plotly:true */

import ReactTable from 'react-table'
import React, { Component } from 'react';
// import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPlotlyComponent from 'react-plotly.js/factory';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
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
      this.handleSliderChange = this.handleSliderChange.bind(this);
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
        return list
    }

    handleSliderChange(vals) {
        this.setState({
            firstYear: vals[0],
            secondYear: vals[1]
        })
    }

    render() {
        const xValues = this.generateXValues(this.state.firstYear, this.state.secondYear)
        const [properXValues, yValues] = this.computeLineGraphData(xValues);
        const graphTitle = this.props.graphTitle ? this.props.graphTitle : `Time Series Trend for ${this.props.coverType} Between ${this.state.firstYear} and ${this.state.secondYear}`
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
                    title: graphTitle,
                    font: {
                        family: 'Arial',
                        size: 14,
                        color: '#000'
                    },
                    xaxis: {
                        title: this.props.xAxisTitle,
                        tickformat: 'd'
                    },
                    yaxis: {
                        title: this.props.yAxisTitle
                    },
                    plot_bgcolor: 'white'
                }}
            />
            <p> 
                Filter years below...{this.state.firstYear} to {this.state.secondYear}
            </p>
            <Range min={2010} max={2018} pushable={1} defaultValue={[this.state.firstYear, this.state.secondYear]} tipFormatter={value => `${value}%`} onAfterChange={this.handleSliderChange} />
        </div>
        )
    }
}

export default BenthicTimeSeriesGraph;
