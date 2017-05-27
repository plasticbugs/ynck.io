import React, { Component } from 'react';

class TattooList extends Component {
  render() {
    return (
      <ul>
        { this.props.tattoos.map((tattoo) => {
          return (
            <li><img src={ tattoo.url }/></li>
          );
        })};
      </ul>
    );
  }
}