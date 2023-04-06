export const Character = (props) => {
  const { _id, image, name } = props;
  return (
    <li>
      <a>
        <img src={image.src} alt={image.alt} />
        <h1>{name}</h1>
      </a>
    </li>
  );
}
