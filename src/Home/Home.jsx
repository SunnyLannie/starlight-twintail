import React, { Component } from 'react';
import styles from "./Home.module.css"

class Home extends Component {
  state = {
    announcements: [
      {
        category: 'Jewel Campaign',
        startDate: new Date('11/27/2017'),
        endDate: new Date('12/11/2017'),
        amount: 250,
        message: `Log in today to get`,
      },
      {
        category: 'Game Update',
        version: '1.2.3',
        endDate: new Date('12/03/2017'),
        message: `Check update notes here. Forced update on`
      },
    ],
    news: [
      {
        category: 'Upcoming Event',
        startDate: new Date('11/30/2017'),
        endDate: new Date('12/07/2017'),
      },
    ],
  };
  render(){
    return (
      <div className={styles.homepage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.appTitle}>Starlight Twintail</h1>
        </header>
        <Notice
          className={styles.notice}
          contents={this.state.announcements}
        />
        <EventCarousel
          className={styles.carousel}
          category="Token"
          title="Kawaii Make My Day"
          img="assets/event/Kawaii-make-My-Day.png"
        />
        <GachaCarousel 
          className={styles.carousel}
          category="Limited"
          startDate= {new Date('11/30/2017')}
          endDate= {new Date('12/10/2017')}
          img="assets/gacha/newyear2016.png"
        />
        <LatestNews
          className={styles.latestNews}
        />
        <FeaturedIdol
          className={styles.featuredIdol}
        />
      </div>
    );
  };
}

class Notice extends Component {
  render() {
    const contents = this.props.contents;
    var messages = contents.map((content, i) => <div key={i}>{content.message}</div>
//      console.log(content.message);
    );

    return(
      <div className={this.props.className}>{messages}</div>
    );
  };
}

class EventCarousel extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <div>{this.props.category} Event:</div>
        <div style={{fontFamily: 'Mirza', fontSize: '30px'}}>{this.props.title}</div>
        <img src={this.props.img} alt="Kawaii-Make-My-Day"></img>
        <CarouselTab />
      </div>
    );
  };
}

class GachaCarousel extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <div>{`${this.props.category} Gacha`}</div>
        <img src={this.props.img} alt="New Year 2016 Gacha"></img>
        <CarouselTab />
      </div>
    );
  };
}

class CarouselTab extends Component {
  render() {
    return(
      <div>
      </div>
    );
  };
}

class LatestNews extends Component {
  render() {
    return(
      <div>
      </div>
    );
  };
}

class FeaturedIdol extends Component {
  render() {
    return(
      <div>
      </div>
    );
  };
}

export default Home;