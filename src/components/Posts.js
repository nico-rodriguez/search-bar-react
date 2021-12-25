import './Posts.css';

const Posts = ({ posts }) => {
  return <ul>
    {posts.map(({id, name}) => (
      <li key={id}>{name}</li>  
    ))}
  </ul>
}

export default Posts;