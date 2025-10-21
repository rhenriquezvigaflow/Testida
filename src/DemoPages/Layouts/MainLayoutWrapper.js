import React, { Fragment } from "react";

import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import ThemeOptions from "../../Layout/ThemeOptions";

export default function MainLayoutWrapper({ children }) {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">{children}</div>
        </div>
      </div>
    </Fragment>
  );
}
