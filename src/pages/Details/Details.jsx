import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/use-fetch";

import { CharacterInfo } from "../../components/CharacterInfo";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export const Details = (props) => {
  const { service } = props;
  const { id } = useParams();
  const { isLoading, isError, error, data } = useFetch(() => service.getById(id));

  if (isLoading) return <Loading />
  if (isError) return <Error message={error.message || error} />

  return (
    <main data-testid="content">
      <CharacterInfo
        name={data.name}
        films={data.films}
        videoGames={data.videoGames}
        image={{ src: data.imageUrl, alt: `Imagem do personagem ${data.name}` }}
      />
    </main>
  );
}
