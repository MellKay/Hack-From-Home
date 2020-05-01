import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-native";
import i from "./icon.svg";

function InfoIcon() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Image
        source={i}
        style={{ width: 30, height: 30, marginTop: -70, marginLeft: 200 }}
        onClick={() => setShow(true)}
      />

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="lgModal">Welcome to AniMate!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ani is your own virtual pet and companion designed to take care of
            you. With your Ani you can do daily activities including eating
            meals, having a wash and doing exercise so you will never feel
            lonely again. As a caring empathic companion, Ani will also ask you
            about your overall feeling and happiness each day.
          </p>
          <p>
            <strong>
              If you eat, so does Ani. If you are happy, so is Ani!
            </strong>
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <p>
            The health bar tracks daily exercise, sleep, self-care and showers.{" "}
          </p>
          <p>
            The hunger bar tracks the number of meals you've had in a day. It
            also auto updates the health bar for every meal you've had.
          </p>
          <p>
            The happiness bar tracks if you've done an activity you really
            enjoy. It also increases every time you caress Ani.{" "}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoIcon;
