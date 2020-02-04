import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import { CourseDisplay } from './components/CourseDisplay';
import Cart from './components/Cart';

import './index.css';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '0 calc(1rem + 10%)'
          }}
        >
          <CourseDisplay />
          <Cart />
        </div>
      </>
    );
  }
}

export default App;
