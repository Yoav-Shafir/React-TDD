import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import balanceReducer from "./redux/reducers/balance";
import bitcoinReducer from "./redux/reducers/bitcoin";
import GiftListContainer from "./features/gift/GiftList.container";
import WalletContainer from "./features/wallet/Wallet.container";

export const rootReducer = combineReducers({
  balance: balanceReducer,
  bitcoin: bitcoinReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/gifts" component={GiftListContainer} />
        <Route path="/wallet" component={WalletContainer} />
      </Router>
    </Provider>
  );
};

export default App;
