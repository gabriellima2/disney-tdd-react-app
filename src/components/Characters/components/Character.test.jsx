import { render, screen } from "@testing-library/react";

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
      const character = {
        _id: "01",
        name: "any_name",
        imageUrl: "any_image_url",
        imageAlt: `any_image_alt`
      };
      renderComponent(character);

      const image = screen.getByAltText(character.imageAlt);

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", character.imageUrl);
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });
});
