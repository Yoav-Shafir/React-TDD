import React from "react";
import { shallow, mount } from "enzyme";

import { BitcoinContainer } from "./Bitcoin.container";
import BitcoinComponent from "./Bitcoin.component";

describe("<BitcoinContainer />", () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {} };
  let wrapper = shallow(<BitcoinContainer {...props} />);
  it("renders the <BitcoinComponent />", () => {
    expect(wrapper.find("BitcoinComponent").exists()).toBe(true);
  });
  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      wrapper = mount(<BitcoinContainer {...props} />);
    });
    it("dispatches the `fetchBitcoin()` method it receives from props", () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});

describe("<BitcoinComponent />", () => {
  describe("when there are valid bitcoin props", () => {
    let component;
    beforeEach(() => {
      const props = { balance: 10, bitcoin: { bpi: { USD: { rate: "1,000" } } }}
      component = shallow(<BitcoinComponent {...props} />)
    });
    it("displays the correct bitcoin value", () => {
      expect(component.find("h3").text()).toEqual("Bitcoin balance: 0.01");
    })
  })
});
