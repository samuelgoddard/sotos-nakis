import React from 'react';
import PropTypes from 'prop-types';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const SEO = ({ meta, favicon }) => {
  return <HelmetDatoCms seo={meta} favicon={favicon} />;
};

SEO.propTypes = {
  meta: PropTypes.object.isRequired,
  favicon: PropTypes.object.isRequired,
};

export default SEO;