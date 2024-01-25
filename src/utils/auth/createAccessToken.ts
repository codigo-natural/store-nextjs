import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate"
import { cookies } from 'next/headers'

export const createAccessToken = async (email: string, password: string) => {
  const cookieStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccesTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
    "email": email,
    "password": password
  })

  const { accesToken, expiresAt } = customerAccesTokenCreate?.customerAccesToken

  if(accesToken) {
    cookieStore.set('accessToken', accesToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict"
    })
  }
}