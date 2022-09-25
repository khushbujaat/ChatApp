
import { GoogleOAuthProvider } from "@react-oauth/google";

// components import
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

   const clientId = '620143189846-eanu5jdo63e5s7vn30ioas0b29g8no94.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider>
     <Messenger />
     </AccountProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
