import React, { Component } from 'react';
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
            <div className="radio">
                <label>
                    <input type="radio" value="PercentCoral" 
                                checked={this.props.coverType === 'PercentCoral'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentCoral')}} />
                    Percent Coral
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="PercentSoftCoral" 
                                checked={this.props.coverType === 'PercentSoftCoral'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentSoftCoral')}} />
                    Percent Soft Coral
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="PercentCCA" 
                                checked={this.props.coverType === 'PercentCCA'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentCCA')}} />
                    Percent CCA
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="PercentBleached" 
                                checked={this.props.coverType === 'PercentBleached'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentBleached')}} />
                    Percent Bleached
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="PercentRubble" 
                                checked={this.props.coverType === 'PercentRubble'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentRubble')}} />
                    Percent Rubble
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="PercentOthAlgae" 
                                checked={this.props.coverType === 'PercentOthAlgae'} 
                                onChange={() => {this.props.handleCoverTypeChange('PercentOthAlgae')}} />
                    Percent Oth Algae
                </label>
            </div>
            <label>
                Year: 
                <input type='text' name='year' value={this.state.year} onChange={this.changeYear} />
                <a onClick={() => { this.props.handleFilterYearChange(this.state.year) }}> Submit </a>
            </label>
            
        </form>
      </div>
    );
  }
}

export default Sidebar