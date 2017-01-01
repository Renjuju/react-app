import React from "react";

import { Search } from "./Search";
import { Header } from "./Header";
export default React.createClass({
  render() {
    let user = this.props.user;
    return(
      <div>
        <Header/>
        <Search/>
      </div>
    );
  }
})
