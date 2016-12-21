import React from "react";

import { Search } from "./Search";

export class Home extends React.Component {
  render() {
    let user = this.props.user;
    return(

      <div>
        <Search/>
      </div>
    );
  }
}

Home.propsTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};

{/* <div>
  <ul>
    {user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
  </ul>
</div> */}
