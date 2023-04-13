import { render, screen } from "@testing-library/react";
import { mockInfos } from "../mocks/mock-infos";

const AdditionalInfos = (props) => {
  const { infos } = props;
  return (
    <ul>
      {infos.map((info) => <li key={info}>{info}</li>)}
    </ul>
  );
}

const renderComponent = () => render(<AdditionalInfos infos={mockInfos} />);

describe("<AdditionalInfos />", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderComponent();

      mockInfos.forEach((info) => {
        expect(screen.getByText(info)).toBeInTheDocument();
      });
    })
  });
});
