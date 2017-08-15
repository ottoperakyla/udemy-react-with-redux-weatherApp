import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData)
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273) // Convert kelvin to celcius
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord
    
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="Celsius" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td> 
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// Get weather prop from global redux state
function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
