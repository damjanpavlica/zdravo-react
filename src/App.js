import React, { Component } from 'react'
import './App.css'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Header from './components/Header'

export default class App extends Component {
  render() {
    const imeFirme = "Moja firma d.o.o.";

    return (
      <div>
        <Header ime={imeFirme} />
        <Main />
        <Footer ime={imeFirme} />
      </div>
    );
  }
}