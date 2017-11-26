import React, { Component } from 'react';
import styles from "./Home.module.css"

class Home extends Component {
  render(){
    return (
      <div className='homepage'>
        <header className={styles.pageHeader}>
          <h1 className={styles.appTitle}>Starlight Twintail</h1>
        </header>
      </div>
    );
  };
}

export default Home;