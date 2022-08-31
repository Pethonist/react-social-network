import React from 'react';

import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from './../../redux/authReducer';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
