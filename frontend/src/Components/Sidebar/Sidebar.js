import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { Radio, RadioGroup } from 'react-radio-group';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        year: props.filterYear,
        yearSlider: props.filterYear
    }
    this.changeYear = this.changeYear.bind(this)
  }

  changeYear(event, value) {
    this.setState({
        yearSlider: value
    })
    this.props.handleFilterYearChange(value)
  }
  render() {
    return (
      <div className="sidebar">
            <form>
                <h5> Cover Type </h5>
                <div>
                    <inh6ut className="with-gap" type='radio' value='PercentCoral'
                    checked={this.props.coverType === 'PercentCoral'} id='cover-type-1'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                    <label htmlFor='cover-type-1'> Percent Coral </label>
                </div>
                <div>
                    <input className="with-gap" type='radio' value='PercentSoftCoral'
                    checked={this.props.coverType === 'PercentSoftCoral'} id='cover-type-2'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                    <label htmlFor='cover-type-2'> Percent Soft Coral </label>
                </div>
                <div>
                    <input className="with-gap" type='radio' value='PercentCCA'
                    checked={this.props.coverType === 'PercentCCA'} id='cover-type-3'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                    <label htmlFor='cover-type-3'> Percent CCA </label>
                </div>
                <div>
                    <input className="with-gap" type='radio' value='PercentBleached'
                    checked={this.props.coverType === 'PercentBleached'} id='cover-type-4'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                     <label htmlFor='cover-type-4'>Percent Bleached</label>
                </div>
                <div>
                    <input className="with-gap" type='radio' value='PercentRubble'
                    checked={this.props.coverType === 'PercentRubble'} id='cover-type-5'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                    <label htmlFor='cover-type-5'>Percent Rubble </label>
                </div>
                <div>
                    <input className="with-gap" type='radio' value='PercentOthAlgae'
                    checked={this.props.coverType === 'PercentOthAlgae'} id='cover-type-6'
                    onClick={(e) => this.props.handleCoverTypeChange(e)}/>
                    <label htmlFor='cover-type-6'> Percent Other Algae </label>
                </div>
            </form>
            <h5> Filtered Year: </h5>
            <p> {this.state.yearSlider} </p>
            <MuiThemeProvider>
                <Slider 
                    min={2000}
                    max={2018}
                    step={1}
                    value={this.state.yearSlider} 
                    onChange={this.changeYear} />
            </MuiThemeProvider>
            <Button className='center-submit' waves='light' onClick={this.props.toggleDataGraph}>{this.props.isDataView ? 'View Graph' : 'View Table'}</Button>
      </div>
    );
  }
}

export default Sidebar