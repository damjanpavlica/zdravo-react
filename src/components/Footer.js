import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Sva prava prepustena. {this.props.ime} 2019.</p>
            </footer>
        )
    }
}
