import { ProfileHeader } from "./ProfileHeader";
import { UserInfo } from "./UserInfo";
export function UserProfile({
  firstName,
  lastName,
  headline,
  location,
  email,
  imgSrc,
}) {
  return (
    <div>
      <ProfileHeader
        firstName={firstName}
        lastName={lastName}
        headline={headline}
      />
      <figure>
        <img src={imgSrc} alt="Logan Tolbert" />
      </figure>
      <UserInfo location={location} email={email} />
    </div>
  );
}
