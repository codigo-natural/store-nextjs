import { validateAccessToken } from "app/utils/auth/validateAccessToken";

// export const dynamic = 'force-static'

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <h2>Account info</h2>
      <section>
        <h1>Nombre: {customer?.firstName}</h1>
        <p>email: {customer?.email}</p>
      </section>
    </div>
  );
}
