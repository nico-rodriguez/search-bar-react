import { useNavigate } from 'react-router-dom';
import './Search.css'

const Search = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const onSubmit = e => {
    navigate(`/?s=${searchQuery}`);
    e.preventDefault();
  }

  return (
    <form action="/" method="GET" autoComplete='off' onSubmit={onSubmit}>
      <label htmlFor="header-search"> {/* accessibility for screen readers */}
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input value={searchQuery} onInput={e => setSearchQuery(e.target.value)} type="text"
        id="header-search" placeholder="Search blog posts" name="s" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;