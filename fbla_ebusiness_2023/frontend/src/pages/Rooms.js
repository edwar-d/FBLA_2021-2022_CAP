import "./css/Rooms.scss";
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.min.css";

import React, { useState } from "react";
import axios from "axios";
import { Container, UncontrolledCarousel } from "reactstrap";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import FadeIn from "components/FadeIn";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Book from "components/Book";
import RoomDisplay from "components/RoomDisplay";

const roomDescription = [
  `Introducing the "Oceanview Oasis" - your luxurious home away from home with a stunning view of the sparkling blue waters. Relax and unwind in this beautifully appointed hotel room, complete with a plush and comfortable bed, spa-inspired bathroom, and all the modern amenities you need for the ultimate escape. The Oceanview Oasis is the perfect place to rejuvenate your body, mind, and soul, and create unforgettable memories.`,
  `Introducing the "Sunset Serenity" - our exquisitely appointed hotel room designed to transport you to a world of relaxation and tranquility. Step inside and experience a blissful night's sleep in a plush and comfortable bed, and awaken to the stunning view of the sun rising over the horizon. The spa-inspired bathroom features luxurious amenities to refresh your senses and start your day off right. The Sunset Serenity is the ultimate destination for those seeking peace and serenity on their next vacation.`,
  `Introducing the "Casual Comfort" - our charming hotel room designed to make you feel right at home. Step inside and experience a blissful night's sleep in a plush and comfortable bed, and awaken to the stunning view of the city skyline. The spa-inspired bathroom features luxurious amenities to refresh your senses and start your day off right. The Casual Comfort is the ultimate destination for those seeking peace and serenity on their next vacation.`,
  `Introducing the "Cityscape Suite" - our spacious and luxurious hotel suite designed to make you feel right at home. Step inside and experience a blissful night's sleep in a plush and comfortable bed, and awaken to the stunning view of the city skyline. The spa-inspired bathroom features luxurious amenities to refresh your senses and start your day off right. The Cityscape Suite is the ultimate destination for those seeking peace and serenity on their next vacation.`,
];

class RoomPage extends React.Component {
  constructor(props) {
    super(props);
    this.bookingRef = React.createRef();
    this.state = {
      rooms: [],
      selectedDate: false,
      date_s: [],
      date_e: [],
    };
  }

  handleBookingState = () => {
    const bookingStateRooms = this.bookingRef.current.state.rooms;
    this.setState({ rooms: bookingStateRooms });
    this.setState({ selectedDate: true });
    const ds = this.bookingRef.current.state.date_s;
    const de = this.bookingRef.current.state.date_e;
    this.setState({ date_s: ds });
    this.setState({ date_e: de });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedDate && !prevState.selectedDate) {
    }
  }

  RoomPageHeader = () => {
    return (
      <Parallax translateY={[-60, 40]}>
        <div className="page-header page-header-small room-page-header">
          <UncontrolledCarousel
            items={[
              {
                key: 1,
                src: require("../assets/imgs/rooms/Room1.jpg"),
              },
              {
                key: 2,
                src: require("../assets/imgs/rooms/Room2.jpg"),
              },
              {
                key: 3,
                src: require("../assets/imgs/rooms/Room3.png"),
              },
              {
                key: 4,
                src: require("../assets/imgs/rooms/Room4.jpg"),
              },
            ]}
            fade={true}
          />
          <div className="content-center">
            <Container>
              <h1>Rooms & Suites</h1>
            </Container>
          </div>
        </div>
      </Parallax>
    );
  };

  RoomContent = () => {
    try {
      let output = [];
      for (let i = 0; i < this.state.rooms.length; i++) {
        const roomNum = this.state.rooms[i];
        output.push(
          <RoomDisplay
            roomNum={roomNum}
            date_s={this.state.date_s}
            date_e={this.state.date_e}
          >
            {roomDescription[roomNum - 1]}
          </RoomDisplay>
        );
      }
      return output;
    } catch (error) {
      return <RoomList />;
    }
  };

  render() {
    let header;
    if (this.state.selectedDate || this.state.rooms.length > 0) {
      header = this.RoomPageHeader();
    } else {
      header = <Book ref={this.bookingRef} upd={this.handleBookingState} />;
    }

    return (
      <ParallaxProvider>
        <div className="roompage-wrapper">
          <NavBar />
          <div className="header-container" id="hdr-c">
            {header}
          </div>
          <div className="roompage">{this.RoomContent()}</div>
          <Footer />
        </div>
      </ParallaxProvider>
    );
  }
}

function RoomList() {
  return (
    <>
      <RoomDisplay roomNum="1">
        Introducing the "Oceanview Oasis" - your luxurious home away from home
        with a stunning view of the sparkling blue waters. Relax and unwind in
        this beautifully appointed hotel room, complete with a plush and
        comfortable bed, spa-inspired bathroom, and all the modern amenities you
        need for the ultimate escape. The Oceanview Oasis is the perfect place
        to rejuvenate your body, mind, and soul, and create unforgettable
        memories.
      </RoomDisplay>
      <RoomDisplay roomNum="2">
        Introducing the "Sunset Serenity" - our exquisitely appointed hotel room
        designed to transport you to a world of relaxation and tranquility. Step
        inside and experience a blissful night's sleep in a plush and
        comfortable bed, and awaken to the stunning view of the sun rising over
        the horizon. The spa-inspired bathroom features luxurious amenities to
        refresh your senses and start your day off right. The Sunset Serenity is
        the ultimate destination for those seeking peace and serenity on their
        next vacation.
      </RoomDisplay>
      <RoomDisplay roomNum="3">
        Introducing the "Casual Comfort" - our cozy hotel room perfect for the
        casual traveler seeking a home away from home. Relax in the plush bed,
        catch up on work in the seating area, and enjoy the convenience of a
        personal coffee maker and mini-fridge. Book now and experience the
        perfect balance of comfort and convenience on your next adventure!
      </RoomDisplay>
      <RoomDisplay roomNum="4">
        Introducing the "Cityscape Suite" - our stunning hotel room that boasts
        breathtaking panoramic views of the city skyline. Step inside and
        experience the ultimate in luxury and comfort, with a plush and
        comfortable bed that promises a blissful night's sleep. The sleek and
        modern bathroom is the perfect oasis to relax and refresh, and the cozy
        seating area provides the perfect spot to unwind after a day of
        exploring the city. With all the modern amenities you need, including a
        large flat-screen TV, a personal coffee maker, and a mini-fridge, the
        Cityscape Suite is the perfect place to call home during your next urban
        adventure.
      </RoomDisplay>
    </>
  );
}

export default RoomPage;
