import { render, screen } from "@testing-library/react";

import { Character } from ".";
import { mockCharacter } from "../mocks/mock-character";

const renderComponent = (props) => render(
    <Character {...props} />
);

describe("<Character />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent(mockCharacter);

      const image = screen.getByAltText(mockCharacter.image.alt);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", mockCharacter.image.src);
      expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    });
  });
});
