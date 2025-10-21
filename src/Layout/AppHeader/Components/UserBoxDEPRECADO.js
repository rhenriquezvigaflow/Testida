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
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        color="link"
                        className="p-0">
                        <img
                          width={40}
                          className="rounded-circle"
                          src={avatar1}
                          alt=""
                        />
                        <FontAwesomeIcon
                          className="ml-2 opacity-8"
                          icon={faAngleDown}
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        right
                        className="rm-pointers dropdown-menu-lg">
                        <div className="dropdown-menu-header">
                          <div className="dropdown-menu-header-inner bg-alternate">
                            <div className="menu-header-content text-left">
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img
                                      width={42}
                                      className="rounded-circle"
                                      src={avatar1}
                                      alt=""
                                    />
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">Cuenta</div>
                                    <div className="widget-subheading opacity-8">
                                      <font color="black" /> {usuario.nombre}
                                    </div>
                                  </div>
                                  <div className="widget-content-right mr-2">
                                    <Button
                                      className="btn-pill btn-shadow btn-shine"
                                      color="lindo"
                                      onClick={setRedirect}>
                                      Cerrar sesión
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                  <div className="widget-content-left header-user-info ml-3">
                    <div className="widget-heading">Cuenta</div>
                    <div className="widget-subheading">Usuario</div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
    </UseContext.Consumer>
  );
}

export default UserBox;
