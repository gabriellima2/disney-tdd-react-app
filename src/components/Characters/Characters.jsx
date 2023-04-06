export const Characters = (props) => {
  const { characters } = props;
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          <img src={character.imageUrl} alt="any_image_alt" />
          <h1>{character.name}</h1>
        </li>
      ))}
    </ul>
  );
}
