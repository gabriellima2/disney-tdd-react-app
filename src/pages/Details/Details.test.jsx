import { render, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { mockCharactersService } from "../../__mocks__/mock-characters-service";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
import { mockError } from "../../__mocks__/mock-error";
import { mockCharacters } from "../../__mocks__/mock-characters";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useParams: vi.fn().mockReturnValue({ id: 1 }),
}));

vi.mock("../../hooks/use-fetch");

export const Details = (props) => {
  const { service } = props;
  const { id } = useParams();
  const { isLoading, isError, error, data } = useFetch(() => service.getById(id));

  if (isLoading) return <Loading />
  if (isError) return <Error message={error.message || error} />

  return (
    <main data-testid="content">
      <p>{data.name}</p>
    </main>
  )
}

const character = { ...mockCharacters[0], _id: 1 }
const renderComponent = () => render(<Details service={mockCharactersService} />);

describe("<Details />", () => {
  describe("Render", () => {
    it("should render loading", () => {
      useFetch.mockReturnValue({ isLoading: true, isError: false, error: null, data: null });
      renderComponent();

      expect(screen.getByTestId("loading")).toBeInTheDocument();
      expect(screen.queryByTestId("error")).not.toBeInTheDocument();
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });
    it("should render error", () => {
      useFetch.mockReturnValue({ isLoading: false, isError: true, error: mockError, data: null });
      renderComponent();

      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
      expect(screen.getByTestId("error")).toBeInTheDocument();
      expect(screen.getByText(mockError.message)).toBeInTheDocument();
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });
    it("should render character details", () => {
      useFetch.mockReturnValue({ isLoading: false, isError: false, error: null, data: character });
      renderComponent();

      const { name } = character;

      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
      expect(screen.queryByTestId("error")).not.toBeInTheDocument();
      expect(screen.getByTestId("content")).toBeInTheDocument();
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
