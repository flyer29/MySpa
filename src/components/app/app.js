import React, {Component} from 'react';

import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';

import './app.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Going to learn React", important: true, like: false, id: 1},
        {label: "That is so good", important: false, like: false, id: 2},
        {label: "I need a break...", important: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newData = [...before, ...after];

      return {
        data: newData
      }
    });
  }

  addItem = (body) => {
      const newItem = {
        label: body,
        important: false,
        id: this.maxId++
      }
      this.setState(({data}) => {
        const newArr =[...data, newItem];
        return {
          data: newArr
        }
      });
  }

  searchPost = (items, term) => {
      if(term.length === 0) {
        return items
      }

      return items.filter((item) => {
        return item.label.indexOf(term) > -1;
      });
  }

  filterPosts = (items, filter) => {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items
    }
  }
  
  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onUpdateSearch = (term) => {
      this.setState({term});
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

    return (
      <div className='app'>
        <AppHeader
          liked={liked}
          allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
            posts={visiblePosts}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}/>
        <PostAddForm
            onAdd={this.addItem}/>
      </div>
    )
  }
}