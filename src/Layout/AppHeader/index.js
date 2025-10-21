import cx from "classnames";
import React, { Fragment } from "react";

import { connect } from "react-redux";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import HeaderLogo from "../AppLogo";

import LogoVigaflow from "../../assets/utils/images/vigaflow_logo.png";
import UserBox from "./Components/UserBox";

class Header extends React.Component {
  render() {
    const { headerBackgroundColor, enableMobileMenuSmall, enableHeaderShadow } =
      this.props;
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}>
          <HeaderLogo />

          <img
            style={{ margin: "5px 30px" }}
            src={LogoVigaflow}
            width="85px"
          />

          <div
            className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall
            })}>
            <div className="app-header-right">
              <UserBox />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: "bg-alternate header-text-light",
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
