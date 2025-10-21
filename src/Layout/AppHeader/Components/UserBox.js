import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import {
  Button,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";
import UseContext from "../../AppMain/UserContext";
import useToken from "../../AppMain/useToken";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonIcon from "@material-ui/icons/Person";
import avatar1 from "../../../assets/utils/images/avatars/1.jpg";

function UserBox() {
  const { setToken } = useToken();
  const setRedirect = () => {
    setToken(null);
    window.location.reload();
    window.location.href = "";
  };

  return (
    <UseContext.Consumer>
      {(usuario) =>
        usuario && (
          <Fragment>
            <div
              className="widget-content-left"
              style={{ color: "#fff", marginRight: "20px" }}>
              <div className="widget-subheading opacity-8">
                <PersonIcon />
                <font color="black" /> {usuario.nombre}
              </div>
            </div>
            <div className="widget-content-right mr-1">
              <Button
                className="btn-pill btn-shadow btn-shine"
                color="lindo"
                onClick={setRedirect}>
                Cerrar sesión
              </Button>
            </div>
          </Fragment>
        )
      }
    </UseContext.Consumer>
  );
}

export default UserBox;
