import React from "react";

export class Search extends React.Component {
  render() {
    let user = this.props.user;
    return(
      <div className="col-lg-6">
       <div className="input-group">
         <input type="text" className="form-control" placeholder="Search for..."/>
         <span className="input-group-btn">
           <button className="btn btn-default" type="button">Go!</button>
         </span>
       </div>
     </div>
    );
  }
}
