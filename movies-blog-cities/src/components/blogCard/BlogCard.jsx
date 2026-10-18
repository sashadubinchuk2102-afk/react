import PropTypes from 'prop-types';

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p className="blog-date">{post.date}</p>
      <p className="blog-text">{post.text}</p>
      <div className="blog-tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag-badge">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default BlogCard;