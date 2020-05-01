import React from 'react';
import { storiesOf } from '@storybook/react';

import Book from './Book';

const style = {
    backgroundColor: 'rgb(225, 225, 205)',
}




storiesOf('Book', module)
  .add('Book', () => <Book title='Book' style={style} />)