/* global Plotly:true */
import React, { Component } from 'react';
import Graph from '../Graph/Graph';
import BenthicTimeSeriesGraph from '../BenthicTimeSeriesGraph/BenthicTimeSeriesGraph';
import './GraphEditor.css';

class GraphEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
          graphTitle: null,
          xAxisTitle: null,
          yAxisTitle: null
      };
      this.handleGraphTitleChange = this.handleGraphTitleChange.bind(this)
      this.handleXAxisChange = this.handleXAxisChange.bind(this)
      this.handleYaxisChange = this.handleYaxisChange.bind(this)
    }

    handleGraphTitleChange(e) {
        this.setState({
            graphTitle: e.target.value
        })
    }

    handleXAxisChange(e) {
        this.setState({
            xAxisTitle: e.target.value
        })
    }

    handleYaxisChange(e) {
        this.setState({
            yAxisTitle: e.target.value
        })
    }

    render() {
        const { data, coverType, isFiltered, SEType, filterYear } = this.props
        return (
            <div class='graph-editor'>
                <div style={{"padding": "2rem 3rem 3rem 3rem"}}>
                    <form>
                        <h5> Graph Details </h5>
                        <div>
                            <div>
                                <span> Graph Title </span>
                                <input className="with-gap" type='text' value={this.state.graphTitle}
                                    id='graph-title' placeholder='Enter graph title'
                                    onChange={this.handleGraphTitleChange} />
                            </div>
                            <div>
                                <span> X-Axis Title </span>
                                <input className="with-gap" type='text' value={this.state.xAxisTitle}
                                    id='x-axis-title' placeholder='Enter x-axis label'
                                    onChange={this.handleXAxisChange} />
                            </div>
                            <div>
                                <span> Y-Axis Title </span>
                                <input className="with-gap" type='text' value={this.state.yAxisTitle}
                                    id='y-axis-title' placeholder='Enter y-axis label'
                                    onChange={this.handleYaxisChange} />
                            </div>
                        </div>
                    </form>
                </div>
                {this.props.graphType === 'Bar Graph' && 
                    <Graph data={data} 
                        coverType={coverType} 
                        isFiltered={isFiltered} 
                        SEType={SEType} 
                        filterYear={filterYear}
                        graphTitle={this.state.graphTitle}
                        xAxisTitle={this.state.xAxisTitle}
                        yAxisTitle={this.state.yAxisTitle} />}
                {this.props.graphType === 'Line Graph (2 years)' && 
                    <BenthicTimeSeriesGraph data={data} 
                        coverType={coverType} 
                        isFiltered={isFiltered} 
                        SEType={SEType} 
                        filterYear={filterYear}
                        graphTitle={this.state.graphTitle}
                        xAxisTitle={this.state.xAxisTitle}
                        yAxisTitle={this.state.yAxisTitle} />}
            </div>
        )
    }
}

export default GraphEditor;
