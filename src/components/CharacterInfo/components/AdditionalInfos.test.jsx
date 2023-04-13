import { render, screen } from "@testing-library/react";
import { mockInfos } from "../mocks/mock-infos";

const AdditionalInfos = (props) => {
  const { title, infos } = props;
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {infos.map((info) => <li key={info}>{info}</li>)}
      </ul>
    </section>
  );
}

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
