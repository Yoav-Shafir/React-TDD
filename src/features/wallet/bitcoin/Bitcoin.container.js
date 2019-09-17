import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBitcoin } from "../../../redux/actions/bitcoin";
import BitcoinComponent from "./Bitcoin.component";

export class BitcoinContainer extends Component {
  componentDidMount = () => {
    this.props.fetchBitcoin();
  };

  render = () => <BitcoinComponent {...this.props} />;
}

const mapStateToProps = state => ({
  balance: state.balance,
  bitcoin: state.bitcoin
});

const mapDispatchToProps = dispatch => ({
  fetchBitcoin: () => dispatch(fetchBitcoin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BitcoinContainer);
