import React, { useState } from 'react';
import Signup from "./pages/users/sign-up";
import Signin from "./pages/users/sign-in";

function App() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        {isSigningUp ? <Signup setIsSigningUp={setIsSigningUp} isSigningUp={isSigningUp} /> : <Signin setIsSigningUp={setIsSigningUp} isSigningUp={isSigningUp} />}
      </div>
    </>
  );
}

export default App;
