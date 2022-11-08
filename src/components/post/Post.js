const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h4 className="post-header">{post.title}</h4>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
