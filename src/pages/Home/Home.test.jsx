import { render, screen } from "@testing-library/react";

import { mockCharacters } from "../../__mocks__/mock-characters";
import { mockError } from "../../__mocks__/mock-error";
import { useFetch } from "../../hooks/use-fetch";

export const Home = (props) => {
  const { service } = props;
  const { isError, isLoading, error, data } = useFetch(service);
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

vitest.mock("../../hooks/use-fetch");

const characterService = vitest.fn();
const renderComponent = () => render(<Home service={characterService} />);

describe("<Home />", () => {
  beforeAll(() => {
    vitest.clearAllMocks();
  })

  describe("Render", () => {
    it("should render loading", () => {
      useFetch.mockReturnValue({ isLoading: true, isError: false, error: null, data: null });
      renderComponent();
      
      expect(screen.getByTestId("loading")).toBeInTheDocument();
      expect(screen.queryByTestId("error")).not.toBeInTheDocument();
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });
    it("should render error message", () => {
      useFetch.mockReturnValue({ isLoading: false, isError: true, error: mockError, data: null });
      renderComponent();

      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
      expect(screen.getByTestId("error")).toBeInTheDocument();
      expect(screen.getByText(mockError.message)).toBeInTheDocument();
      expect(screen.queryByTestId("content")).not.toBeInTheDocument();
    });
    it("should render character list", () => {
      useFetch.mockReturnValue({ isLoading: false, isError: false, error: null, data: mockCharacters });
      renderComponent();

      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
      expect(screen.queryByTestId("error")).not.toBeInTheDocument();
      expect(screen.getByTestId("content")).toBeInTheDocument();
      mockCharacters.forEach((character) => {
        const { name } = character;
        expect(screen.getByText(name)).toBeInTheDocument();
      })
    })
  });
});
