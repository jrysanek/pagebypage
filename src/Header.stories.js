import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header'

const style = {
    backgroundColor: 'red',
    color: 'white',
    height: '300px'
}

storiesOf('Header', module)
  .add('Header', () => <Header label="Header" style={style} />)