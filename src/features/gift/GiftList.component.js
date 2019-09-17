import React from "react";
import { Button } from "react-bootstrap";

import GiftComponent from "./Gift.component";

const GiftsComponent = ({ gifts, addGift, removeGift }) => {
  return (
    <>
      <h2>Gift Giver</h2>
      <div className="gift-list">
        {gifts.map(gift => (
          <GiftComponent {...{ key: gift.id, gift, removeGift }} />
        ))}
      </div>
      <Button className="btn-add" onClick={addGift}>
        Add Gift
      </Button>
    </>
  );
};

export default GiftsComponent;
