import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBar from './SearchBar';

const style = {
        backgroundColor: 'rgb(225, 225, 205)',   
        display: 'flex',
        justifyContent: 'center',
        padding: '5px 5px',
        margin: '12px 10px',
        textAlign: 'center'
}



storiesOf('SearchBar', module)
  .add('SearchBar', () => <SearchBar title='Searchbar' style={style} />)