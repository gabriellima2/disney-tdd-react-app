import { useFetch } from "../../hooks/use-fetch";

export const Home = (props) => {
  const { service } = props;
  const { isError, isLoading, error, data } = useFetch(service.getAll);
  if (isLoading) return <h1 data-testid="loading"></h1>;
  if (isError) return <h1 data-testid="error">{error.message}</h1>
  return (
    <main data-testid="content">
      <ul>
        {data.map((character) => <li>{character.name}</li>)}
      </ul>
    </main>
  );
}
