import React, {Component} from 'react'

export default class Header extends Component {
    render (){
        return (
            <header>
                <h2>{this.props.ime}</h2>
            </header>
        )
    }
}

//ili ovde export default Header