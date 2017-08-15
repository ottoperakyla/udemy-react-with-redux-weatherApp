import React, { Component } from 'react'

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    // using the React "ref"-system here
    // we map this.refs.map to this element
    // so we can reference it in componentDidMount
    
    // the "refs" system is generally used
    // to integrate 3rd party libraries with React
    return <div ref="map" />
  }
}
