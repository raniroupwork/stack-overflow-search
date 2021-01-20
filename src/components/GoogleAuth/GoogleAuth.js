// Mudules
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Types
import { SIGN_IN, SIGN_OUT } from '../../redux/auth/types.js';

const GoogleAuth = ( props ) => {
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
	<div>
		{isSignedIn ? (
			<button onClick={onSignOutClick}>Signout</button>
		):(
			<button onClick={onSignInClick}>Sign In with Google</button>
		)}
	</div>
	);


};

const mapStateToProps = (state) => {
	return {
		authReducer: state.authReducer,
	};
};


export default connect(mapStateToProps)(GoogleAuth);

