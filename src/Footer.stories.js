import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const style = {
  backgroundColor: 'rgb(175, 5, 8)',
  color: 'black',
  borderRadius: '2px',
  height: '100px',
  width: '100%vh',
  // padding: '15px 25px',
  border: "none"
}


storiesOf('Footer', module)
  .add('Footer', () => <Footer label="Footer" style={style} />)