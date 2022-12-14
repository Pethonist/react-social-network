import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getUserProfile, getStatus, updateStatus } from '../../../redux/profileReducer';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';

import Profile from './../Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let withRouter = (ProfileContainer) => {
  function ProfileContainerWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <ProfileContainer {...props} router={{ location, navigate, params }} />;
  }
  return ProfileContainerWithRouterProp;
};

// TODO fix bugs with redirect to login page
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) {
//     <Navigate to="/login" />;
//   }
//   return <ProfileContainer {...props} />;
// };

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);

// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));
