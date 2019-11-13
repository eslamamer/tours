import React, { Component } from 'react'
import './Tour.scss'

export default class Tour extends Component {
state={
    open:false
}
infoHandler = ()=>{
    this.setState({
        open:!this.state.open
    })
}
    render() {
        const {removeTour}=this.props
        const {id,city, img, info, name}=this.props.tour
        return (
            <article className="tour">
                <div className="img-contaner">
                    <img width="200px"
                     src={img}
                      alt="image"/>
                    <span className="close-btn" onClick={()=>{removeTour(id)}}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.infoHandler}>
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                    {this.state.open && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
