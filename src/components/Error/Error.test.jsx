import { render, screen } from "@testing-library/react";
import { Error } from "./Error";

const ERROR_MESSAGE = "any_error";
const renderComponent = () => render(<Error message={ERROR_MESSAGE} />)

describe("<Error />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent();
      
      expect(screen.getByTestId("error")).toBeInTheDocument();
      expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
    })
  })
})