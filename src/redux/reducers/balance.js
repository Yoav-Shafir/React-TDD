import * as constants from "../constants";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return state + action.deposit;
    case constants.WITHDRAW:
      return state - action.withdrawl;
    default:
      return state;
  }
};

export default balanceReducer;
