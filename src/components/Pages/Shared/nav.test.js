import renderer from "react-test-renderer";
import nav from "./Navbar";

it("renders correctly", () => {
  const tree = renderer.create(nav).toJSON();
  expect(tree).toMatchSnapshot();
});
