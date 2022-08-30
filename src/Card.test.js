import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3}
  />);
});

it('shows card', function () {
  const { container } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3}
  />);
  const caption = container.querySelector('h4');
  
  expect(container.querySelector('.Card-title')).toBeInTheDocument();
  expect(caption).toContainHTML(`<h4 class="Card-title">testing image 1</h4>`);

});

it("matches snapshot", function () {
  const { container } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={3}
  />);
  expect(container).toMatchSnapshot();
});