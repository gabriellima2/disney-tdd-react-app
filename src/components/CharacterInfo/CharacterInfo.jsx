import { AdditionalInfos } from "./components";

export const CharacterInfo = (props) => {
  const { image, name, films, videoGames } = props;
  return (
    <article>
      <img src={image.src} alt={image.alt} />
      <section>
        <h1>{name}</h1>
        <div>
          <AdditionalInfos title="Filmes" infos={films} />
          <AdditionalInfos title="Video Games" infos={videoGames} />
        </div>
      </section>
    </article>
  );
}
