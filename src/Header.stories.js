import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header'

const style = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80)',
    height: '300px',
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '2px 3px beige'
}

storiesOf('Header', module)
  .add('Header', () => <Header label="Header" style={style} />)