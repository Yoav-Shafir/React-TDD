import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import GiftComponent from "./Gift.component";

describe("<GiftComponent />", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  let component = shallow(<GiftComponent {...props} />);

  it("initializes a person and a present in `state`", () => {
    expect(component.state()).toEqual({ person: "", present: "" });
  });
  describe("when typing into the person input", () => {
    const person = "Uncle";
    beforeEach(() => {
      component
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });
    it("updates the person in `state`", () => {
      expect(component.state().person).toEqual(person);
    });
  });
  describe("when typing into the present input", () => {
    const present = "Golf Clubs";
    beforeEach(() => {
      component
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });
    it("updates the present in `state`", () => {
      expect(component.state().present).toEqual(present);
    });
  });
  describe("when clicking the `Remove Gift` button", () => {
    beforeEach(() => component.find(".btn-remove").simulate("click"));
    it("calss the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
