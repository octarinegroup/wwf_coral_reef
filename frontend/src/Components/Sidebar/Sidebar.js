import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import { Radio, RadioGroup } from 'react-radio-group';

import './Sidebar.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        year: props.filterYear
    }
    this.changeYear = this.changeYear.bind(this)
  }

  changeYear(changeEvent) {
    this.setState({
        year: changeEvent.target.value 
    })
  }
  render() {
    return (
      <div className="sidebar">
            <form>
                <div>
                    <input className="with-gap" type='radio' value='PercentCoral'
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
            <h6> Set Filter Year: </h6>
            <Input className='centered-input' type='text' name='year' placeholder={`${this.state.year}`} onChange={this.changeYear} />
            <Button className='center-submit' waves='light' onClick={() => { this.props.handleFilterYearChange(this.state.year) }}>Submit</Button>
            <h6> View Data Grid/Graph: </h6>
            <Button className='center-submit' waves='light' onClick={this.props.toggleDataGraph}>Toggle</Button>
      </div>
    );
  }
}

export default Sidebar