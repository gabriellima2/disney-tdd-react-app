import { render, screen } from "@testing-library/react";

import { AdditionalInfos } from ".";
import { mockInfos } from "../mocks/mock-infos";

const TITLE = "any_title";
const renderComponent = () => render(<AdditionalInfos title={TITLE} infos={mockInfos} />);

describe("<AdditionalInfos />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent();

      expect(screen.getByText(TITLE)).toBeInTheDocument();
      mockInfos.forEach((info) => {
        expect(screen.getByText(info)).toBeInTheDocument();
      });
    })
  });
});
