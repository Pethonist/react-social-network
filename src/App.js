import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

import './App.css';

import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';

import { connect } from 'react-redux';
import { getAuthUserData } from './redux/authReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render(props) {
    return (
      <div className="app-wraper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wraper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default connect(null, { getAuthUserData })(App);
