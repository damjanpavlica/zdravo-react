import React, { Component } from 'react'
import Utisak from './Utisak'
import korisnici from '../data/korisnici.json'

export default class Main extends Component {
    render() {

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
