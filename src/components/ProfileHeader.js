export function ProfileHeader({ firstName, lastName, headline }) {
  const fullName = `${firstName} ${lastName}`;
  return (
    <header>
      <h1>{fullName}</h1>
      <span>{headline}</span>
    </header>
  );
}
