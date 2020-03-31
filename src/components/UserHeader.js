import React from "react";
import { connect } from "react-redux";

const UserHeader = props => {
  const { user } = props;
  if (!user) {
    return null;
  }

  return <div className="header">{user.name}</div>;
};

// If we need to precalculate any data, we can use the ownProps param to find the particular props of this specific component
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
