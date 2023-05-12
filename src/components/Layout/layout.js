import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import NotificationContext from "store/notification-context";
import Notification from "../Ui/notification";

function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  console.log(notificationCtx);

  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && <Notification
        title={activeNotification.title}
        message={activeNotification.message}
        status={activeNotification.status}
      />}
    </Fragment>
  );
}

export default Layout;
