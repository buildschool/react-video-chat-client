import React from 'react';
import AgoraUIKit from 'agora-react-uikit';
import { getToken } from './service/service';

export default function App() {
  const [token, setToken] = React.useState(null);
  const [videoCall, setVideoCall] = React.useState(false);
  const rtcProps = {
		appId: process.env.APP_ID,
		channel: 'fiesta',
		token: null
  };
  const callbacks = {
  	EndCall: () => setVideoCall(false),
  };
  React.useEffect(() => {
	try {
		getToken()
			.then(response => {
				console.log(response['data']['token']);
			});
	} catch (error) {
		console.error(error);
	};
  }, []);
  return (videoCall) ? (
		<div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
			<nav style={{ width: '100vw', height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<h1>React Video Chat</h1>
			</nav>
			<div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
				<AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
			</div>
  		</div>
  	) : (
  		<div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
			<nav style={{ width: '100vw', height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<h1>React Video Chat</h1>
			</nav>
			<div>
				<h3 onClick={() => setVideoCall(true)}>Start Video Call</h3>
			</div>
  		</div>
  	)
};