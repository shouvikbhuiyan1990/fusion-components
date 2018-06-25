import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const carouselContainer = css`
  width: 100%;
  position: relative;
`;

const slidersContainer = css`
  position: relative;
  padding: 0;
`;

const slides = css`
  position: relative;
  list-style: none;
  display: none;
`;

const slidesActive = css`
  position: relative;
  list-style: none;
  display: block;
`;

const imgResponsive = css`
  min-width: 100%;
`;

const leftArrow = css`
  position: absolute;
  z-index: 2;
  top: 42%;
  left: 0;
`;

const rightArrow = css`
  position: absolute;
  z-index: 2;
  top: 42%;
  right: 0;
`;

const arrowLeft = css`
  cursor: pointer;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const arrowRight = css`
  cursor: pointer;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getActiveSlideStyle(selected) {
    if (selected) {
      return slidesActive;
    }
    return slides;
  }

  render() {
    return (
      <div>
        <div className={carouselContainer}>
          <div className={leftArrow}>
            <i className={arrowLeft} />
          </div>
          <div className={rightArrow}>
            <i className={arrowRight} />
          </div>
          <ul className={slidersContainer}>
            {!!this.props.carouselData &&
              this.props.carouselData.map(({ title, url, selected }) => (
                <li key={title} className={this.getActiveSlideStyle(selected)}>
                  <img className={imgResponsive} src={url} alt={title} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  carouselData: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
};

Carousel.defaultProps = {
  carouselData: [
    {
      url: 'http://via.placeholder.com/350x150',
      selected: true,
      title: '1',
    },
    {
      url: 'http://via.placeholder.com/450x150',
      selected: false,
      title: '2',
    },
  ],
};

export default Carousel;
