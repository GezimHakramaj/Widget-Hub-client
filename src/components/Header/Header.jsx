import { Navbar, Icon } from "../index";

import "../../styles/components/Header/Header.css";

export function Header(props) {
  return (
    <div className="header">
      <Navbar user={props.user} />
      <Icon />
    </div>
  );
}
