const filterPosts = (posts, query) => {
  if (!query) return posts;

  return posts.filter(({name}) => name.toLowerCase().includes(query));
}

export default filterPosts;