import { Links } from "./Links";

export function UserInfo({ location, email }) {
  return (
    <section>
      <ul>
        <li>{location}</li>
        <li>{email}</li>
      </ul>
      <Links />
    </section>
  );
}
