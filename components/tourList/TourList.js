import React, { Component } from 'react'
import Tour from '../tour/Tour'
import {tourData} from '../../tourData'
import './TourList.scss'
export default class TourList extends Component {
    state = {
        tours:tourData,
    };
    removeTour = id=>{
        const {tours} = this.state
        const updatedTour = tours.filter(tour=>tour.id!=id)
        this.setState({
            tours:updatedTour
        })
    }
    render() {
        console.log(this.state.tours)
        return (
            <section className="tourlist">
                {this.state.tours.map(tour=>{
                    return(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        )
    }
}
