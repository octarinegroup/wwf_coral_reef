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

import { getBenthicData } from '../../actions/services/benthic'

class BenthicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.computeMarkerSize = this.computeMarkerSize.bind(this);
    this.determineMarkerColor = this.determineMarkerColor.bind(this);
  }

  /* Sets the color of circle markers by Zone type. If 'Use', then RED. If 'NTZ', then BLUE. */
  determineMarkerColor(entry) {
    return entry.Zone === 'Use' ? 'red' : 'blue'
  }

  computeMarkerSize(entry) {
    console.log('radius is for, ', this.props.coverType);
    return entry[this.props.coverType]/2;
  }
 
  render() {
    return (
      <Map className="actual-map" center={[this.props.benthicData[0].Latitude, this.props.benthicData[0].Longitude]} zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { this.props.benthicData.map((entry, i) => {
          if ((entry.Latitude !== null) && (entry.Longitude !== null) && (entry.Year === this.props.filterYear)) {
            return <CircleMarker center={[entry.Latitude, entry.Longitude]} color={this.determineMarkerColor(entry)} radius={this.computeMarkerSize(entry)}>
              <Popup>
                  <span>Radius is for: {this.props.coverType} </span>
              </Popup>
            </CircleMarker>
          }
        })}
      </Map>
    );
  }
}

export default BenthicMap