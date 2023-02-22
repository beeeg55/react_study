const Movie = ({ id, title, smallCoverImage }) => {
  return (
    <div>
      <h3>title : {title}</h3>
      <p>no : {id}</p>
      <img src={smallCoverImage} alt={id} />
    </div>
  );
};

export default Movie;
