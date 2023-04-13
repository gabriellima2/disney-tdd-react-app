import { render, screen } from "@testing-library/react";

import { CharacterInfo } from "./CharacterInfo";
import { mockCharacterInfo } from "./mocks/mock-character-info";

const FILMS_TITLE = "Filmes";
const VIDEO_GAMES_TITLE = "Video Games";

const renderComponent = () => render(<CharacterInfo {...mockCharacterInfo} />);

describe("<CharacterInfo />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent();

      const { name, image, films, videoGames } = mockCharacterInfo;
      const imageEl = screen.getByAltText(image.alt);

      expect(imageEl).toBeInTheDocument();
      expect(imageEl).toHaveAttribute("src", image.src);
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(FILMS_TITLE)).toBeInTheDocument();
      expect(screen.getByText(VIDEO_GAMES_TITLE)).toBeInTheDocument();
      films.forEach((film) => expect(screen.getByText(film)).toBeInTheDocument());
      videoGames.forEach((game) => expect(screen.getByText(game)).toBeInTheDocument());
    })
  });
});
