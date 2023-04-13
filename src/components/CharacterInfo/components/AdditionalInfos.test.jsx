import { render, screen } from "@testing-library/react";

import { AdditionalInfos } from ".";
import { mockInfos } from "../mocks/mock-infos";

const TITLE = "any_title";
const WITHOUT_INFOS_MESSAGE = "Sem informações!";

const renderComponent = (props) => render(<AdditionalInfos title={TITLE} infos={props.infos} />);

describe("<AdditionalInfos />", () => {
  describe("Render", () => {
    it("should render correctly with infos", () => {
      renderComponent({ infos: mockInfos });

      expect(screen.getByText(TITLE)).toBeInTheDocument();
      mockInfos.forEach((info) => {
        expect(screen.getByText(info)).toBeInTheDocument();
      });
    })
    it("should render correctly without infos", () => {
      renderComponent({ infos: [] });

      expect(screen.getByText(TITLE)).toBeInTheDocument();
      expect(screen.getByText(WITHOUT_INFOS_MESSAGE)).toBeInTheDocument();
    })
  });
});
