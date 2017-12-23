import React, { Component } from 'react';
import Home from './Home/Home'
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return(
      <div className={styles.navBar}>
        <nav>
          <ul className={styles.siteNav}>
            <li>News</li>
            <li>Idols</li>
            <li>Cards</li>
            <li>Events</li>
            <li>Gacha</li>
          </ul>
        </nav>
      </div>
    );
  };
}

export default App;
