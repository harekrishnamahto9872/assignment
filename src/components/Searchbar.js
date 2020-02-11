import React, { Component } from 'react'
import axios from 'axios'

class Searchbar extends Component{
    state = {
        cities:[]
    }
    componentDidMount()
    {
        axios.get('https://indian-cities-api-nocbegfhqg.now.sh/cities')
        .then(res =>{
            console.log(res.data)
            this.setState(
                {
                    cities : res.data
                }
            )
        })
       
    }
    
    render()
    {
        const citiesList = this.state.cities.map(city=>{
            return(
                <option value="" key={city.City}>{city.City}</option>
            )
        })

        return(
            <div>
                <select name="" id="">
                    {citiesList}
                </select>
            </div>
        )
    }
}
export default Searchbar