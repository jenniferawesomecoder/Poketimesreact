
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/:post_id' component={Post} />

          </div>

      </BrowserRouter>
    )
  }
}

