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
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  getActiveSlideStyle(selected) {
    if (selected) {
      return slidesActive;
    }
    return slides;
  }

  handleNavigation(index, identifier) {
    if (identifier.toLowerCase() === 'left') {
      this.props.leftNavigation(index);
    } else if (identifier.toLowerCase() === 'right') {
      this.props.rightNavigation(index);
    }
  }

  render() {
    return (
      <div>
        <div className={carouselContainer}>
          <ul className={slidersContainer}>
            {!!this.props.carouselData &&
              this.props.carouselData.map(({ title, url, selected }, i) => (
                <li key={title} className={this.getActiveSlideStyle(selected)}>
                  <div
                    className={leftArrow}
                    onClick={() => this.handleNavigation(i, 'left')}
                    onKeyPress={() => {}}
                    role="button"
                    tabIndex={0}
                  >
                    <i className={arrowLeft} />
                  </div>
                  <div
                    className={rightArrow}
                    onClick={() => this.handleNavigation(i, 'right')}
                    onKeyPress={() => {}}
                    role="button"
                    tabIndex={0}
                  >
                    <i className={arrowRight} />
                  </div>
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
  leftNavigation: PropTypes.func.isRequired,
  rightNavigation: PropTypes.func.isRequired,
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
