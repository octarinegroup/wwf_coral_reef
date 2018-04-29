/* global Plotly:true */

import ReactTable from 'react-table'
import React, { Component } from 'react';

import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly);

class Graph extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };

      this.computeBarGraphData = this.computeBarGraphData.bind(this);
    }

    computeBarGraphData() {
        let use = 0;
        let useError = 0;
        let ntz = 0;
        let ntzError = 0;
        let total = 0;

        this.props.data.map((entry, i) => {
            if(entry.Year === this.props.filterYear) {
                total+=1;
                if (entry.Zone === 'Use') {
                    use += entry[this.props.coverType]
                    useError += entry[this.props.SEType]
                } else if (entry.Zone === 'NTZ') {
                    ntz += entry[this.props.coverType]
                    ntzError += entry[this.props.SEType]
                }    
            }
        })

        return [use/total, useError/total, ntz/total, ntzError/total]
    }

    render() {

        const [ useAvg, useError, ntzAvg, ntzError ] = this.computeBarGraphData();
        return (
            <Plot
            data={[
              {
                type: 'bar',
                x: ['Use Zone', 'No Take Zone'],
                y: [useAvg, ntzAvg],
                error_y: {
                    visible: true,
                    type: 'data',
                    array: [useError, ntzError],
                    thickness: 2
                },
                marker: {
                    color: ['#64b5f6', '#e57373']
                }
              }
            ]}
      
            layout={{
              title: this.props.graphTitle,
              font: {
                  family: 'Arial',
                  size: 14,
                  color: '#000'
              },
              xaxis: {
                title: this.props.xAxisTitle
              },
              yaxis: {
                title: this.props.yAxisTitle
              },
              height: 400,
              plot_bgcolor: 'white'
            }}
          />
        )
    }
}

export default Graph;
