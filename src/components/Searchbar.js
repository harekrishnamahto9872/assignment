import React, { Component } from 'react'
import axios from 'axios'
import MapContainer from './MapContainer'

class Searchbar extends Component{
    state = {
        states:[
            {"code": "NA", "name":"select state"},
            {"code": "AN","name": "Andaman & Nicobar Islands"},
            {"code": "AP","name": "Andhra Pradesh"},
            {"code": "AR","name": "Arunachal Pradesh"},
            {"code": "AS","name": "Assam"},  
            {"code": "BR","name": "Bihar"},
            {"code": "CG","name": "Chandigarh"},
            {"code": "CH","name": "Chhattisgarh"},
            {"code": "DH","name": "Dadra & Nagar Haveli"},
            {"code": "DD","name": "Daman & Diu"},
            {"code": "DL","name": "Delhi"},
            {"code": "GA","name": "Goa"},
            {"code": "GJ","name": "Gujarat"},
            {"code": "HR","name": "Haryana"},
            {"code": "HP","name": "Himachal Pradesh"},
            {"code": "JK","name": "Jammu & Kashmir"},
            {"code": "JH","name": "Jharkhand"},
            {"code": "KA","name": "Karnataka"},
            {"code": "KL","name": "Kerala"},
            {"code": "LD","name": "Lakshadweep"},
            {"code": "MP","name": "Madhya Pradesh"},
            {"code": "MH","name": "Maharashtra"},
            {"code": "MN","name": "Manipur"},
            {"code": "ML","name": "Meghalaya"},
            {"code": "MZ","name": "Mizoram"},
            {"code": "NL","name": "Nagaland"},
            {"code": "OR","name": "Odisha"},
            {"code": "PY","name": "Puducherry"},
            {"code": "PB","name": "Punjab"},
            {"code": "RJ","name": "Rajasthan"},
            {"code": "SK","name": "Sikkim"},
            {"code": "TN","name": "Tamil Nadu"},
            {"code": "TS","name": "Telangana"},
            {"code": "TR","name": "Tripura"},
            {"code": "UK","name": "Uttarakhand"},
            {"code": "UP","name": "Uttar Pradesh"},
            {"code": "WB","name": "West Bengal"}
        ],
        cities : [],
        selectedState : 'Gujarat'
    }
    componentDidMount()
    {
        
       
    }
    handleChange = (e) =>{
        this.setState({
            selectedState : e.target.value
        })
        axios.get(`https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${e.target.value}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
                cities : res.data
            })
        })
    }
    render()
    {
        const statesList = this.state.states.map(State=>{
            return(
                <option value="" key={State.code} value={State.name}>{State.name}</option>
            )
        })

        const citiesList = this.state.cities.map(city=>{
            return(
                <option value="" key={city.City} value={city.City}>{city.City}</option>
            )
        })


        return(
            <div>
                <select name="" id="" onChange={this.handleChange}>
                    {statesList}
                </select>
                <div>
                    <select name="" id="">
                        {citiesList}
                    </select>
                </div>
                <div>
                    <MapContainer cities={this.state.cities} selectedState={this.state.selectedState} />
                </div>
            </div>
        )
    }
}
export default Searchbar