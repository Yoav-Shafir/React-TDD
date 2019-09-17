import React from "react";

const BitcoinComponent = props => {
  const computeBitcoin = () => {
    const { bitcoin, balance } = props;
    if (!Object.keys(bitcoin).length) return "";

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
  }

  return (
    <>
      <h3>Bitcoin balance: {computeBitcoin()}</h3>
    </>
  );
};

export default BitcoinComponent;
