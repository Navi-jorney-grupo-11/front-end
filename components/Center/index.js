import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Center({ children }) {
	return <Container>{children}</Container>;
}

Center.propTypes = {
	children: PropTypes.element,
};

Center.defaultProps = {
	children: <></>,
};

const Container = styled.div`
	max-width: 1180px;
	margin: 0 auto;
`;