import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = message =>
	<div>
		Hello {message}
	</div>;

HelloWorld.PropTypes = {
	message: PropTypes.string
};
export default HelloWorld;
