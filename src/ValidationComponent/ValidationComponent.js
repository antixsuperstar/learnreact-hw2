import React from 'react';

const ValidationComponent = props => {
	const validLength = 'Text ' +
		(props.length > 4 ? 'long enough' : 'too short');

	return (
		<p>{validLength}</p>
	);
};

export default ValidationComponent;