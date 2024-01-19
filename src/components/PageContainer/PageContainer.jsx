// PageContainer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './pageContainer.scss';

const PageContainer = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
