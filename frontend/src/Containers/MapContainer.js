import React, { Component } from 'react';
import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

import { getBenthicData } from '../actions/services/benthic'
import BenthicMap from '../Components/BenthicMap/BenthicMap'
import Sidebar from '../Components/Sidebar/Sidebar'
import DataTable from '../Components/DataTable/DataTable'
import Graph from '../Components/Graph/Graph'
import './MapContainer.css'
import BenthicTimeSeriesGraph from '../Components/BenthicTimeSeriesGraph/BenthicTimeSeriesGraph'
import { SidebarCollapsed } from '../Components/Sidebar/SidebarCollapsed'
import { GraphsSidebar } from '../Components/GraphsSidebar/GraphsSidebar'

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benthicData: null,
      isLoaded: false,
      coverType: 'PercentCoral',
      filterYear: 2016,
      SEType: 'SECoral',
      isDataView: true,
      isFiltered: false,
      filteredData: null,
      sidebarCollapsed: false,
      showDataView: false
    };
    this.handleCoverTypeChange = this.handleCoverTypeChange.bind(this)
    this.handleFilterYearChange = this.handleFilterYearChange.bind(this)
    this.toggleDataGraph = this.toggleDataGraph.bind(this)
    this.filterRawData = this.filterRawData.bind(this)
    this.removeDataFilter = this.removeDataFilter.bind(this)
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.toggleShowData = this.toggleShowData.bind(this)
  }

  handleCoverTypeChange(e) {
    let SEType = this.state.coverType;

    switch (e.target.value) {
      case 'PercentCoral':
        SEType = 'SECoral'
        break;
      case 'PercentSoftCoral':
        SEType = 'SESoftCoral'
        break;
      case 'PercentCCA':
        SEType = 'SECCA'
        break;
      case 'PercentBleached':
        SEType = 'SEBleached'
        break;
      case 'PercentRubble':
        SEType = 'SERubble'
        break;
      case 'PercentOthAlgae':
        SEType = 'SEOthAlgae'
        break;
    }


    this.setState({
      coverType: e.target.value,
      SEType
    })
  }

  filterRawData(filteredData) {
    console.log('filtering, ', filteredData)
    this.setState({
      isFiltered: true,
      filteredData
    })
  }

  removeDataFilter() {
    const data = this.state.benthicData
    this.setState({
      isFiltered: false,
      filteredData: data
    })
  }

  handleFilterYearChange(filterYear) {
    this.setState({
      filterYear: Number.parseInt(filterYear)
    })
  }

  toggleDataGraph() {
    this.setState({
      isDataView: !this.state.isDataView
    })
  }

  toggleSidebar() {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed
    })
  }

  toggleShowData() {
    this.setState({
      showDataView: !this.state.showDataView
    }, () => {
      if (!this.state.sidebarCollapsed) {
        this.toggleSidebar()
      } else if(!this.state.showDataView) {
        this.toggleSidebar()
      }
    })
  }

  componentDidMount() {
    getBenthicData()
      .then(benthicData => {
        this.setState({
          benthicData: benthicData.data.data,
          filteredData: benthicData.data.data,
          isLoaded: true
        })
      })
  }

  render() {
    const dataView = this.state.isDataView ?
      <DataTable data={this.state.filteredData} coverType={this.state.coverType} filterYear={this.state.filterYear} isFiltered={this.state.isFiltered} />
      :
      <div className="graph-container">
        <Graph data={this.state.filteredData} coverType={this.state.coverType} isFiltered={this.state.isFiltered} SEType={this.state.SEType} filterYear={this.state.filterYear} />
        <BenthicTimeSeriesGraph data={this.state.benthicData} coverType={this.state.coverType} isFiltered={this.state.isFiltered} SEType={this.state.SEType} filterYear={this.state.filterYear} />
      </div>
    return (
      this.state.isLoaded ?
        <div className="map-container-wrapper">
          {
            this.state.sidebarCollapsed ?
              <SidebarCollapsed toggleSidebar={this.toggleSidebar} />
              : <Sidebar
                toggleDataGraph={this.toggleDataGraph}
                isDataView={this.state.isDataView}
                coverType={this.state.coverType}
                filterYear={this.state.filterYear}
                handleCoverTypeChange={this.handleCoverTypeChange}
                handleFilterYearChange={this.handleFilterYearChange}
                toggleSidebar={this.toggleSidebar}
                showDataView={this.state.showDataView}
              />
          }
          <BenthicMap
            filterRawData={this.filterRawData}
            removeDataFilter={this.removeDataFilter}
            benthicData={this.state.benthicData}
            coverType={this.state.coverType}
            filterYear={this.state.filterYear}
          />
          <GraphsSidebar showDataView={this.state.showDataView} />
          <div className='data-container'>
            {
              this.state.showDataView ?
                dataView
                : null
            }
            <div
              className={`data-view-show ${this.state.showDataView ? 'top-right' : ''}`}
              onClick={this.toggleShowData}
            >
              {this.state.showDataView ? 'Hide' : 'Show'} Data
            </div>
            {
              this.state.showDataView ?
                <div
                  className={`data-view-show ${this.state.showDataView ? 'top-left' : ''}`}
                  onClick={this.toggleDataGraph}
                >
                  Show {this.state.isDataView ? 'Graph' : 'Table'}
                </div>
                : null
            }
          </div>
        </div>
        :
        null
    );
  }
}

export default MapContainer