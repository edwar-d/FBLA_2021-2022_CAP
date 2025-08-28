import React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, imgs: props.images, paused: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  toggleAnimation() {
    const curPausedState = this.state.paused;
    this.setState({ paused: !curPausedState });
  }

  next() {
    if (this.animating || this.state.paused) return;
    const nextIndex =
      this.state.activeIndex === this.state.imgs.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating || this.state.paused) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.imgs.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating || this.state.paused) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, imgs } = this.state;

    const slides = imgs.map((imgs) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={imgs.src}
        >
          <img src={imgs.src} alt={imgs.altText} />
          <CarouselCaption
            captionText={imgs.caption}
            captionHeader={imgs.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        pause="hover"
        ride="carousel"
        interval={3000}
      >
        <CarouselIndicators
          items={imgs}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText=" "
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText=" "
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default ImageCarousel;
