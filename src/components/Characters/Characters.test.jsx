import { render, screen } from "@testing-library/react";

import { Characters } from ".";
import { mockCharacters } from "./mocks/mock-characters";

const renderComponent = (props) => render(<Characters {...props} />);

describe("<Characters />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent({ characters: mockCharacters });
      mockCharacters.forEach((character) => {
        const { name, imageUrl } = character;
        const image = screen.getByAltText(`Imagem do personagem ${name}`);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", imageUrl);
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});
