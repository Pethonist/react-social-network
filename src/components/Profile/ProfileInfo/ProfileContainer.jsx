import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './../Profile';
import { setUserProfile } from '../../../redux/profileReducer';

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });

let withRouter = (ProfileContainer) => {
  function ProfileContainerWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <ProfileContainer {...props} router={{ location, navigate, params }} />;
  }
  return ProfileContainerWithRouterProp;
};

// function withRouter(ProfileContainer) {
//   return (props) => {
//     let match = { params: useParams() };
//     return <ProfileContainer {...props} match={match} />;
//   };
// }

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
