import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

import GiftListContainer from "./GiftList.container";
import GiftListComponent from "./GiftList.component";

describe("<GiftListContainer />", () => {
  let container;
  beforeEach(() => {
    container = shallow(<GiftListContainer />);
  });
  it("initializes the `state` with an empty `gifts` list", () => {
    expect(container.state().gifts).toEqual([]);
  });
  describe("`addGift()` and `removeGift()`", () => {
    beforeEach(() => container.instance().addGift());
    it("adds a gift to `state`", () => {
      expect(container.state().gifts.length).toEqual(1);
      expect(container.state().gifts).toEqual([{ id: 1 }]);
    });
    it("removes a gift from `state`", () => {
      container.instance().removeGift(1);
      expect(container.state().gifts.length).toEqual(0);
      expect(container.state().gifts).toEqual([]);
    });
  });
});

describe("<GiftListComponent />", () => {
  const mockAddGift = jest.fn();
  const mockRemoveGift = jest.fn();
  const props = {
    gifts: [{ id: 1 }, { id: 2 }],
    addGift: mockAddGift,
    removeGift: mockRemoveGift
  };
  const component = mount(<GiftListComponent {...props} />);
  it("renders correctly", () => {
    const component = renderer
      .create(<GiftListComponent {...props} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("when clicking the `Add Gift` button", () => {
    it("executes `addGift()`", () => {
      component.find("button.btn-add").simulate("click");
      expect(mockAddGift).toBeCalled();
    });
  });
});
