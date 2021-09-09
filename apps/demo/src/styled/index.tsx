import React from 'react';

import SpinnerStyle from './spinner';

const LayoutPage = (props) => {
  return <SpinnerStyle>{props.children}</SpinnerStyle>;
};

export default LayoutPage;
