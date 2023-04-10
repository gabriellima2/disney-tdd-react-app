import { useFetch } from "../../hooks/use-fetch";

import { Characters } from "../../components/Characters";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

export const Home = (props) => {
  const { service } = props;
  const { isError, isLoading, error, data } = useFetch(() => service.getAll());

  if (isLoading) return <Loading />
  if (isError) return <Error message={error.message || error} />

  return (
    <main data-testid="content">
      <Characters characters={data.data} />
    </main>
  );
}
