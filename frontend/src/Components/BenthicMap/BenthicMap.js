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
  FeatureGroup
} from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import { getBenthicData } from '../../actions/services/benthic'
class BenthicMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.computeMarkerSize = this.computeMarkerSize.bind(this);
    this.determineMarkerColor = this.determineMarkerColor.bind(this);
    this._onCreated = this._onCreated.bind(this);
    this._onDeleted = this._onDeleted.bind(this);
    this._onDeleteStart = this._onDeleteStart.bind(this);
    this._onDeleteStop = this._onDeleteStop.bind(this);
    this._onEdited = this._onDeleted.bind(this);
    this._onEditStart = this._onEditStart.bind(this);
    this._onEditStop = this._onEditStop.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onMounted = this._onMounted.bind(this);
    this._isInside = this._isInside.bind(this);
    this.filterDataByPolygon = this.filterDataByPolygon.bind(this);
  }

  /* Sets the color of circle markers by Zone type. If 'Use', then RED. If 'NTZ', then BLUE. */
  determineMarkerColor(entry) {
    return entry.Zone === 'Use' ? 'gray' : 'blue'
  }

  computeMarkerSize(entry) {
    // console.log('radius is for, ', this.props.coverType, entry[this.props.coverType]);
    return entry[this.props.coverType]/2;
  }

  _isInside(point, vs) {
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
  }

  filterDataByPolygon(polygonBoundary) {
    let filtered = [];
    this.props.benthicData.map((data, i) => {
      if(this._isInside([data.Latitude, data.Longitude], polygonBoundary) && (data.Latitude !== null) && (data.Longitude !== null) && (data.Year === this.props.filterYear)) {
        filtered.push(data)
      }
    })

    console.log('filtered ', filtered)
    console.log('func, ', this.props.filterRawData);
    this.props.filterRawData(filtered)
  }

  _onChange = () => {

    // this._editableFG contains the edited geometry, which can be manipulated through the leaflet API

    console.log('on change');
  }

  _onEdited = (e) => {

    let numEdited = 0;
    e.layers.eachLayer( (layer) => {
      numEdited += 1;
    })
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    this._onChange();
  }

  _onCreated(e) {
    let type = e.layerType;
    let layer = e.layer;
    if (type === 'marker') {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    }
    else {
      console.log("_onCreated: something else created:", type, e, layer._latlngs[0]);
      const latLngObj = layer._latlngs[0];
      let polygonBoundary = []
      latLngObj.map((point, i) => {
        polygonBoundary.push([point.lat, point.lng])
      })

      this.filterDataByPolygon(polygonBoundary)
    }
    // Do whatever else you need to. (save to db; etc)

    this._onChange();
  }

  _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer( (layer) => {
      numDeleted += 1;
    })
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    this.props.removeDataFilter()
  }

  _onMounted = (drawControl) => {
    console.log('_onMounted', drawControl);
  }

  _onEditStart = (e) => {
    console.log('_onEditStart', e);
  }

  _onEditStop = (e) => {
    console.log('_onEditStop', e);
  }

  _onDeleteStart = (e) => {
    console.log('_onDeleteStart', e);
  }

  _onDeleteStop = (e) => {
    console.log('_onDeleteStop', e);
  }
 
  render() {
    return (
      <Map center={[this.props.benthicData[0].Latitude, this.props.benthicData[0].Longitude]} zoom={12}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
          <EditControl
            position='topright'
            onEdited={this._onEdited}
            onCreated={this._onCreated}
            onDeleted={this._onDeleted}
            onMounted={this._onMounted}
            onEditStart={this._onEditStart}
            onEditStop={this._onEditStop}
            onDeleteStart={this._onDeleteStart}
            onDeleteStop={this._onDeleteStop}
            draw={{
              rectangle: false,
              marker: false,
              circlemarker: false,
              circle: false,
              polyline: false
            }}
          />
        </FeatureGroup>
        { this.props.benthicData.map((entry, i) => {
          if ((entry.Latitude !== null) && (entry.Longitude !== null) && (entry.Year === this.props.filterYear)) {
            return <CircleMarker center={[entry.Latitude, entry.Longitude]} color={this.determineMarkerColor(entry)} radius={this.computeMarkerSize(entry)}>
              <Popup>
                  <p> 
                    Site Name: {entry.Site_Name} <br />
                    Value: {entry[this.props.coverType]} <br />
                    Zone: {entry.Zone} <br />
                    Year: {entry.Year}
                  </p> 
              </Popup>
            </CircleMarker>
          }
        })}
      </Map>
    );
  }
}

export default BenthicMap