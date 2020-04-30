import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'rgb(175, 5, 8)',
  height: '100px',
  width: '100%vh',
  paddingTop: '1px',
  margin: "0"
}


storiesOf('Footer', module)
  .add('Footer', () => <Footer label="Footer" style={style} />)