import React, { Component } from 'react'
import Utisak from './Utisak'
import korisnici from '../data/korisnici.json'

export default class Main extends Component {
    state = {
      randomUsers: []
    }

    componentDidMount() {
      fetch('https://randomuser.me/api/?results=10')
        .then(x => x.json())
        .then(x => this.setState({
          randomUsers: x.results
        }))
    }

    render() {
        console.log(this.state.randomUsers);
        // TODO: mapirati randomUsers za HTML i prikazati ih

        const korisniciJsx = korisnici
            .map((x, i) => <Utisak key={i} korisnik={x}/>)

        return (
            <main>
                <h3>Utisci korisnika</h3>
                {korisniciJsx}
            </main>
        )
    }
}
