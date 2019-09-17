import React from "react";

const WalletComponent = ({ balance, onChange, deposite, withdraw }) => {
  return (
    <>
      <h2>Wallet</h2>
      <h3 className="balance">Wallet balance: {balance}</h3>
      <input className="input-wallet" onChange={onChange} />
      <button type="button" onClick={deposite}>
        Deposite
      </button>
      <button type="button" onClick={withdraw}>
        Withdraw
      </button>
    </>
  );
};

export default WalletComponent;
