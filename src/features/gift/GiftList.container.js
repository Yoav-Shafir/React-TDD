import React, { Component } from "react";

import GiftListComponent from "./GiftList.component";
import { maxNum } from "../../helpers";

class GiftListContainer extends Component {
  state = { gifts: [] };

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    const maxId = maxNum(ids);
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    let { gifts } = this.state;
    gifts = gifts.filter(g => g.id !== id);
    this.setState({ gifts });
  };

  render = () => {
    const { gifts } = this.state;
    const { addGift, removeGift } = this;
    return <GiftListComponent {...{ gifts, addGift, removeGift }} />;
  };
}

export default GiftListContainer;
