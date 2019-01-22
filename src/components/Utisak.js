import React, { Component } from 'react'
import './Utisak.css'

export default class Utisak extends Component {

    state = {
        izabran: false
    }

    handleClick() {
        this.setState({
            izabran: !this.state.izabran
        })
    }

    render() {
        const {slika, utisak, ime} = this.props.korisnik
        return (
            <div 
                className={this.state.izabran ? 'active' : ''}
                onClick={this.handleClick.bind(this)}
            >
                <blockquote>
                    <p>{utisak}</p>
                    <img src={slika} className="user-img" alt={ime} />
                </blockquote>
                <cite>– {ime}</cite>
            </div>
        )
    }
}
