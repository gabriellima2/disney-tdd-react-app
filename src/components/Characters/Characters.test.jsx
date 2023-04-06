import { render, screen } from "@testing-library/react";
import { mockCharacters } from "./mocks/mock-characters";

const Characters = (props) => {
  const { characters } = props;
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          <img src={character.imageUrl} alt="any_image_alt" />
          <h1>{character.name}</h1>
        </li>
      ))}
    </ul>
  )
}

const renderComponent = (props) => render(<Characters {...props} />);

describe("<Characters />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent({ characters: mockCharacters });
      mockCharacters.forEach((character) => {
        const { name, imageUrl } = character;
        const image = screen.getByAltText(`any_image_alt`);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", imageUrl);
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});
