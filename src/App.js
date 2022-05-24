// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We now have Auth!</h1>
//       </header>
//       <AmplifySignOut />
//     </div>
//   );
// }

// export default withAuthenticator(App);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);