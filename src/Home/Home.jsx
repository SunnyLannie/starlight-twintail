import React, { Component } from 'react';
import styles from "./Home.module.css";
import cx from 'classnames';

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
    // 0 index fetches main event
    currentEvent: [
      {
        category: "Live Groove Vocal Burst",
        song: "純情Midnight伝説",
        romanji: "Junjou Midnight Densetsu",
        bannerMini: "assets/event/junjou-midnight-densetsu-mini.png",
        banner: "assets/event/sakura-no-koro.png",
        rankSR: "assets/event/jmdtakumi.png",
        pointSR:"assets/event/jmdrina.png",
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
        
        <Notice
          contents={this.state.announcements}
        />
        <EventCarousel
          event={this.state.currentEvent[0]}
        />
        {/*<GachaCarousel 
          category="Limited"
          startDate= {new Date('11/30/2017')}
          endDate= {new Date('12/10/2017')}
          img="assets/gacha/newyear2016.png"
        />
        <LatestNews
        />
        <FeaturedIdol
        />*/}
      </div>
    );
  };
}

// prop: contents, origin: Home, statename: announcement
class Notice extends Component {
  render() {
    const contents = this.props.contents;
    var messages = contents.map((content, i) => <div className={styles.notice} key={i}>{content.message}</div>
//      console.log(content.message);
    );

    return(
      <div>{messages}</div>
    );
  };
}

// props: 
class Carousel extends Component {
  render() {
    return(
      <div>
        <img className={styles.carouselBG} src={this.props.banner} alt="Kawaii-Make-My-Day"></img>
      </div>
    );
  };
}

// props:
class EventCarousel extends Component {
  render() {
    var event = this.props.event;
    if(event.romanji !== null){
      return (
        <div className={styles.carousel}>
          <div className={styles.eventSong}>{event.song}</div>
          <div className={styles.romanji}>{event.romanji}</div>
          <div><img className={styles.carouselBannerMini} src={event.bannerMini} alt={event.romanji+'-mini'}></img></div>
          <CarouselCardInfo
            rankSR={event.rankSR}
            pointSR={event.pointSR}
          />
        </div>
      );
    } else {
      return(
        <div className={styles.carousel}>
          <div className={styles.eventSong}>{event.song}</div>
          {/*<img className={styles.carouselBannerMini} src={this.props.bannerMini} alt="sakura-no-koro"></img>*/}
          <CarouselCardInfo
          />
          {/*<div className={styles.eventTitle}>{this.props.title}</div>*/}
        </div>
      );
    }
  };
}

class GachaCarousel extends Component {
  render() {
    return(
      <div className={styles.carousel}>
        <div>{`${this.props.category} Gacha`}</div>
        <img className={styles.carouselBG} src={this.props.img} alt="New Year 2016 Gacha"></img>
        
      </div>
    );
  };
}

class CarouselCardInfo extends Component {
  render() {
    return(
      <div className={styles.carouselTab}>
        <CardInfo
          className={styles.cardInfo}
          card={this.props.rankSR}
          float={styles.left}
          alt={'jmdtakumi'}
        />
        <CardInfo
          className={styles.cardInfo}
          card={this.props.pointSR}
          float={styles.right}
          alt={'jmdrina'}
        />
        {/*<div className={styles.cardInfoL}>
                  {`Vocal:
                  Visual:
                  Dance:`}
                </div>
                <div className={styles.cardInfoL}>
                  {`2000
                  4000
                  6000`}
                </div>
                <div className={styles.cardInfoR}>
                  {`Vocal
                  Visual
                  Dance`}
                </div>*/}
      </div>
        
    );
  };
}

class CardInfo extends Component {
  render() {
    return(
      <div className={cx(
          this.props.className,
          this.props.float)}>
        <img className={cx(
              styles.cardIcon,
              this.props.float)}
            src={this.props.card} alt={this.props.alt}></img>
          <div>Vocal</div>
          <div>Dance</div>
          <div>Visual</div>
          <div className={styles.skillDescription}>
            I love Hibiki
          </div>
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