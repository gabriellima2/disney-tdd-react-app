import { render, screen } from "@testing-library/react";
import "react-router-dom";

import { useFetch } from "../../hooks/use-fetch";

import { Details } from "./Details";

import { mockCharactersService } from "../../__mocks__/mock-characters-service";
import { mockCharacters } from "../../__mocks__/mock-characters";
import { mockError } from "../../__mocks__/mock-error";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useParams: vi.fn().mockReturnValue({ id: 1 }),
}));

vi.mock("../../hooks/use-fetch");

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
