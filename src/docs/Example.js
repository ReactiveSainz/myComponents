import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode : false };
  }
  toggleCode = event => {
    event.prevenDefault();
    this.setState(prevState => {
      return {...prevState, showCode: !prevState.showCode }
    });
  }
  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <div className='example'>
        {description && <h4>{ description }</h4>}
        <ExampleComponent />
        <p>
          <button onClick={this.toggleCode}>
            {showCode ? 'Hide' : 'Show'} Code
          </button>
        </p>
        {showCode && code}
      </div>
    )
  }
}

Example.PropTypes = {
  example: PropTypes.object.isRequired
}
export default Example;
