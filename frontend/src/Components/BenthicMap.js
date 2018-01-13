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

class BenthicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        benthicData: null,
        isLoaded: false,
        coverType: 'PercentCoral'
    };

    this.computeMarkerSize = this.computeMarkerSize.bind(this);
    this.determineMarkerColor = this.determineMarkerColor.bind(this);
  }


  /* Sets the color of circle markers by Zone type. If 'Use', then RED. If 'NTZ', then BLUE. */
  determineMarkerColor(entry) {
    return entry.Zone === 'Use' ? 'red' : 'blue'
  }

  computeMarkerSize(entry) {
    console.log('entry, ', entry[this.state.coverType]/2)
    return entry[this.state.coverType]/2;
  }
 
  componentDidMount() {
    getBenthicData()
    .then(benthicData => {
			console.log("benthic data, ", benthicData.data)
        this.setState({
            benthicData: benthicData.data.data,
            isLoaded: true
        })
    })
  }

  render() {
    return (
    	this.state.isLoaded ? 
      <Map className="actual-map" center={[this.state.benthicData[0].Latitude, this.state.benthicData[0].Longitude]} zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { this.state.benthicData.map((entry, i) => {
          if ((entry.Latitude !== null) && (entry.Longitude !== null)) {
            return <Circle center={[entry.Latitude, entry.Longitude]} color={this.determineMarkerColor(entry)} radius={this.computeMarkerSize(entry)} />
          }
        })}
      </Map>
      :
      null
    );
  }
}

export default BenthicMap