import React from 'react';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';

import './app.css';

const data = [
  '',
  {},
  {label: "Going to learn React", important: true, id: "dlfka"},
  {label: "That is so good", important: false, id: "sdflkjo"},
  {label: "I need a break...", important: false, id: "sldkfojei"}
];

const App = () => {
  return (
    <div className='app'>
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;