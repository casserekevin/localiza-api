import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class NavBar extends Component {

    render() {
        let button_value =  (<button className='nav-item-btn'>
                                {this.props.icon} {this.props.text}
                            </button>)
        let span_value =    (<span className='nav-item-span'>
                                {this.props.text}
                            </span>)

        let item
        if(this.props.icon){
            (!! this.props.to)
                ?   (item = <Link to={ this.props.to }> { button_value } </Link>) 
                :   (item = button_value)                                 
        }
        else{
            (!! this.props.to)
                ?   (item = <Link to={ this.props.to }> { span_value } </Link>) 
                :   (item = span_value)
        }


        return (
            <li className='nav-item'>
                { item } 
            </li>
        )
    }
}