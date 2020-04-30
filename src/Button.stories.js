import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
  backgroundColor: 'rgb(175, 5, 8)',
  color: 'white',
  borderRadius: '6px',
  padding: '15px 45px',
  border: "none"
}


storiesOf('Button', module)
  .add('Button', () => <Button label="Button" style={style} />)