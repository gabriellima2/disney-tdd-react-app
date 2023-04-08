import { render, screen } from "@testing-library/react";

import { useFetch } from "../../hooks/use-fetch";

import { Home } from "./Home";

import { mockCharactersService } from "../../__mocks__/mock-characters-service";
import { mockCharacters } from "../../__mocks__/mock-characters";
import { mockError } from "../../__mocks__/mock-error";

vitest.mock("../../hooks/use-fetch");

const renderComponent = () => render(<Home service={mockCharactersService} />);

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
