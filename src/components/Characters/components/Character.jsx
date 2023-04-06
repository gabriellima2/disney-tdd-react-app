export const Character = (props) => {
  const { _id, imageUrl, imageAlt, name } = props;
  return (
    <li>
      <a>
        <img src={imageUrl} alt={imageAlt} />
        <h1>{name}</h1>
      </a>
    </li>
  );
}
