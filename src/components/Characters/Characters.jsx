import { Character } from "./components";

export const Characters = (props) => {
  const { characters, className } = props;
  return (
    <ul className={className}>
      {characters.map((character) => (
        <Character
          key={character._id}
          id={character._id}
          name={character.name}
          image={{ src: character.imageUrl, alt: `Imagem do personagem ${character.name}` }}
        />
      ))}
    </ul>
  );
}
