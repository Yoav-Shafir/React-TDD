import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class GiftComponent extends Component {
  state = { person: "", present: "" };

  setSetter = field => ({ target: { value } }) =>
    this.setState({ [field]: value });

  render = () => {
    const { gift, removeGift } = this.props;
    return (
      <div className="gift">
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className={"input-person"}
              onChange={this.setSetter("person")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Present</Form.Label>
            <Form.Control
              className={"input-present"}
              onChange={this.setSetter("present")}
            />
          </Form.Group>
        </Form>
        <Button className="btn-remove" onClick={() => removeGift(gift.id)}>
          Remove Gift
        </Button>
      </div>
    );
  };
}

export default GiftComponent;
