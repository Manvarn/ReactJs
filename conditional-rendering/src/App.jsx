// Conditional-Rendering = allows you to control what gets rendered
//             in your application based on certain condtions
//             (show , hide , or change components)

import UserGreeting from './UserGreeting.jsx';

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={false} username="nikhil"/>
    </>
  );
}

export default App
