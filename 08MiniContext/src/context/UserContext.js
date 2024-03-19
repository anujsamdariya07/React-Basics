import React from "react";

const UserContext = React.createContext()

export default UserContext

// We need to make a provider for this as well
// <UserContextProvider>
//   Here whatever components used will have the access of UserContext and the data that we want to use from it
// </UserContextProvider>