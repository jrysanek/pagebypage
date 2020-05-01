import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header'

const style = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: 'url(https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80)',
    height: '250px',
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '2px 3px beige',
    textShadow: '4px 1px black',
    fontSize: '75px',
    fontFamily: 'Josefin Sans, sans-serif',
    color: 'rgb(175, 5, 8)',
    margin: '0 auto',
    padding: '80px 0',

}

storiesOf('Header', module)
  .add('Header', () => <Header title="Header" style={style} />)