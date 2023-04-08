import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Character } from ".";

import { WithBrowserRouter } from "../../../__mocks__/with-browser-router";
import { mockCharacter } from "../../../__mocks__/mock-character";

const renderComponent = (props) => render(
  <WithBrowserRouter>
    <Character {...props} />
  </WithBrowserRouter>  
);

const makeTitle = (name) => `Ver detalhes de ${name}`;
const makeDetailsUrl = (id) => `/details/${id}`

describe("<Character />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent(mockCharacter);

      const link = screen.getByTitle(makeTitle(mockCharacter.name));
      const image = screen.getByAltText(mockCharacter.image.alt);

      expect(link).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(link).toHaveAttribute("href", makeDetailsUrl(mockCharacter.id));
      expect(image).toHaveAttribute("src", mockCharacter.image.src);
      expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    });
  });
  describe("Interactions", () => {
    describe("Click", () => {
      it("should navigate to details page with character id when clicked", async () => {
        renderComponent(mockCharacter);

        const link = screen.getByTitle(makeTitle(mockCharacter.name));
        await userEvent.click(link);

        expect(window.location.pathname).toBe(makeDetailsUrl(mockCharacter.id));
      })
    })
  })
});
