import React, { Component } from "react";
import { connect } from "react-redux";

import WalletComponent from "./Wallet.component";
import * as actions from "../../redux/actions/balance";

export class WalletContainer extends Component {
  state = { amount: 0 };
  onChange = ({ target: { value } }) =>
    this.setState({ amount: parseInt(value, 10) });

  deposite = () => this.props.deposit(this.state.amount);

  withdraw = () => this.props.withdraw(this.state.amount);

  render = () => {
    const { balance } = this.props;
    const { onChange, deposite, withdraw } = this;
    return (
      <>
        <div>{JSON.stringify(this.state)}</div>
        <WalletComponent {...{ balance, onChange, deposite, withdraw }} />
      </>
    );
  };
}

const mapStateToProps = state => ({
  balance: state.balance
});

const mapDispatchToProps = dispatch => ({
  deposit: amount => dispatch(actions.deposit(amount)),
  withdraw: amount => dispatch(actions.withdraw(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletContainer);
