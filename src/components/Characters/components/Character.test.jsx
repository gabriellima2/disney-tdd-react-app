import { render, screen } from "@testing-library/react";
import { mockCharacter } from "../mocks/mock-character";

const Character = (props) => {
  const { _id, imageUrl, imageAlt, name } = props;
  return (
    <li>
      <a>
        <img src={imageUrl} alt={imageAlt} />
        <h1>{name}</h1>
      </a>
    </li>
  )
}

const renderComponent = (props) => render(
    <Character {...props} />
);

describe("<Character />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent(mockCharacter);

      const image = screen.getByAltText(mockCharacter.imageAlt);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", mockCharacter.imageUrl);
      expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    });
  });
});
