import React, { Component } from 'react';
import Nav from './components/navbare/Nav';
import TourList from './components/tourList/TourList'
import './App.scss';

class App extends Component {
    

    render() {
       
        return (
            <React.Fragment>
                <Nav/>
                <TourList/>
            </React.Fragment>
            
        )
    }
}
export default App;