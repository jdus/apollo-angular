import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, HttpLinkModule, HttpLink} from 'apollo-angular';
import {InMemoryCache} from '@apollo/client/core';

const uri = '<%= endpoint %>'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
