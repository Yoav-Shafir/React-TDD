import balanceReducer from "./balance";
import * as constants from "../constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;
    const action = { type: constants.SET_BALANCE, balance };
    expect(balanceReducer(undefined, action)).toEqual(balance);
  });
  it("deposits into the balance", () => {
    const deposit = 10;
    const initialState = 5;
    const action = { type: constants.DEPOSIT, deposit };
    expect(balanceReducer(initialState, action)).toEqual(
      initialState + deposit
    );
  });
  it("withdraws from the balance", () => {
    const withdrawl = 5;
    const initialState = 10;
    const action = { type: constants.WITHDRAW, withdrawl };
    expect(balanceReducer(initialState, action)).toEqual(
      initialState - withdrawl
    );
  });
});
