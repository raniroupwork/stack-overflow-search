// Modules
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { SIGN_IN, SIGN_OUT } from '../../redux/auth/types.js';

// Styles
import './App.sass';
import 'semantic-ui-css/semantic.min.css'

// Components
import Header from '../../containers/Header/Header.js'
import SearchPanel from '../../containers/SearchPanel/SearchPanel.js'
import QuestionsList from '../../containers/QuestionsList/QuestionsList';


const App = (props) => {
const {
      dispatch,
      authReducer: {
          isSignedIn
      }
  } = props;

const [auth, setAuth] = useState(null);

  useEffect(() => {
      const params = {
          clientId: "77222610368-vquuqu2p28r0m07o94ie84cqk42etpbj.apps.googleusercontent.com",
          scope: "email",
      };

      window.gapi.load("client:auth2", () => {
          window.gapi.client.init(params).then(() => {
              setAuth(window.gapi.auth2.getAuthInstance());
              onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
              window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
          });
      });
  }, []);

  const onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
          dispatch({
              type: SIGN_IN.REQUEST,
              data: window.gapi.auth2.getAuthInstance().currentUser.get().getId(),
          });
      } else {
          dispatch({
              type: SIGN_OUT.REQUEST,
          });
      }
  };

  const onSignInClick = () => {
      auth.signIn();
  };

  const onSignOutClick = () => {
      auth.signOut();
  };

    return (
        <div className="App">
            <Header></Header>
            {!isSignedIn ? (
                <div className="App__login">
                    <button className="App__btn" onClick={onSignInClick}>Sign In with Google</button>
                </div>
            ):(
                <main>
                    <SearchPanel></SearchPanel>
                    <QuestionsList></QuestionsList>
                </main>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
	return {
		authReducer: state.authReducer,
	};
};


export default connect(mapStateToProps)(App)