import React, { Component } from 'react';

class Sticky extends Component {
  element = null;
  position = 0;
  offset = 0;

  constructor(props) {
    super(props);
    this.offset = this.props.offset || this.offset;
  }

  componentDidMount() {
    this.position = this.element.getBoundingClientRect().top;
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll();
  }
  
  aboveScroll = () => {
    console.log(this.position - this.offset, window.scrollY)
    return this.position - this.offset < window.scrollY;
  }

  onScroll = () => {
    if (this.element) {
      if (this.aboveScroll()) {
        this.setFixed();
      } else {
        this.setStatic();
      }
    }
  }

  setFixed = () => {
    this.element.style.position = 'fixed';
    this.element.style.top = `${this.offset}px`;
  }

  setStatic = () => {
    this.element.style.position = 'static';
    this.element.style.top = 'auto';
  }

  render() {
    return (
      <div {...this.props} ref={ref => this.element = ref} />
    );
  }
}

export default Sticky;