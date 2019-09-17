import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

import { WalletContainer } from "./Wallet.container";
import WalletComponent from "./Wallet.component";

describe("<WalletContainer />", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 0, deposit: mockDeposit, withdraw: mockWithdraw };
  const container = shallow(<WalletContainer {...props} />);

  it("has a `balance` prop with a value of 0", () => {
    expect(container.instance().props).toEqual(props);
  });
  describe("when the user changes the `amount`", () => {
    it("updates the `amount` when the user enters some value", () => {
      container.instance().onChange({ target: { value: "25" } });
      expect(container.state().amount).toEqual(25);
    });
    it("dispatches the `deposit()` it receives from props with the current `amount`", () => {
      container.instance().deposite();
      expect(mockDeposit).toBeCalledWith(25);
    });
    it("dispatches the `withdraw()` it receives from props with the current `amount`", () => {
      container.instance().withdraw();
      expect(mockWithdraw).toBeCalledWith(25);
    });
  });
});

describe("<WalletComponent />", () => {
  const mockOnChange = jest.fn();
  const props = { balance: 20, onChange: mockOnChange };
  const component = shallow(<WalletComponent {...props} />);
  it("renders correctly", () => {
    const component = renderer.create(<WalletComponent {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("displays the balance from props", () => {
    expect(component.find(".balance").text()).toEqual("Wallet balance: 20");
  });
  it("creates an input to deposit into or withdraw from the balance", () => {
    expect(component.find(".input-wallet").exists()).toBe(true);
  });
  describe("when the user types into the wallet input", () => {
    const userBalance = "25";
    beforeEach(() => {
      component
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });
    it("executes the `onChange()` handle with the right args", () => {
      expect(mockOnChange).toBeCalledWith({ target: { value: "25" } });
    });
  });
});
