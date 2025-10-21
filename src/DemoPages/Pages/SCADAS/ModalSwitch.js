import cx from "classnames";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import campana from "./campana.png";

import { FormGroup } from "reactstrap";

const ModalSwitch = (props) => {
  useEffect(() => {
    showModal();
  }, [props.data]);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [isToggleOn, setIsToggleOn] = useState("");

  const showModal = () => {
    if (props.data) {
      setIsToggleOn(props.data.isToggleOn);
      setName(props.data.name);
      setShow(true);
    }
  };

  const ModalHide = () => {
    setShow(false);
  };
  const onClickSaveAlarm = () => {
    const dataSave = {
      isToggleOn: isToggleOn
    };
    props.onClickSaveAlarm(dataSave);
    ModalHide();
  };

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <Modal
      show={show}
      onHide={ModalHide}>
      <div className="modal-settings">
        <div align="center">
          <img
            width={25}
            style={{ marginBottom: 5, marginLeft: 5, marginRight: 10 }}
            src={campana}
            alt=""
          />
        </div>
        <div
          align="center"
          className="modal-title">
          ASIGNAR ALARMAS DE LÍMITES
        </div>
        <div
          align="center"
          className="modal-subtitle">
          {name}
          <hr />
        </div>

        <div>
          <FormGroup row>
            Alerta de falla&nbsp;&nbsp;
            <div
              className="switch has-switch mr-2 mb-2"
              data-on-label="ON"
              data-off-label="OFF"
              onClick={handleClick}>
              <div
                className={cx("switch-animate", {
                  "switch-on": isToggleOn,
                  "switch-off": !isToggleOn
                })}>
                <input type="checkbox" />
                <span className="switch-left bg-danger">SI</span>
                <label>&nbsp;</label>
                <span className="switch-right bg-danger">NO</span>
              </div>
            </div>
          </FormGroup>
        </div>
        <div align="center">
          <input
            className="button-set"
            type="submit"
            value="Guardar"
            onClick={onClickSaveAlarm}
          />
        </div>
      </div>
    </Modal>
  );
};
export default ModalSwitch;
