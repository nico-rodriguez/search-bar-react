import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Announcer from './components/Announcer';
import Posts from './components/Posts';
import Search from './components/Search';
import filterPosts from './utils/filterPosts';
import posts from './utils/posts';

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div className="App">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Posts posts={filteredPosts}/>
        <Announcer message={`Query has ${filterPosts.length} results`}/>
      </div>
    </Router>
  );
}

export default App;