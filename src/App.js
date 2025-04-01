import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

import UploadForm from "./UploadForm";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3001/graphql",
  }),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
  );
}

export default App;
