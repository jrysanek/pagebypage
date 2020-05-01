import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
  backgroundColor: 'rgb(247, 169, 113)',
  fontSize: '15px',
  color: 'black',
  borderRadius: '6px',
  padding: '5px 5px',
  border: "none"
}
const wishStyle = {
  backgroundColor: 'rgb(245, 148, 144)',
  fontSize: '15px',
  color: 'black',
  borderRadius: '6px',
  padding: '5px 5px',
  border: "none"
}


storiesOf('Button', module)
  .add('Button', () => <Button title='Button' style={style} />)
  .add('Wishlist', () => <Button title='Wishlist' style={wishStyle} />)