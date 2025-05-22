import ProfileImage from "./assets/me.png";
import "./styles.css";
import { UserProfile } from "./components/UserProfile";

export default function App() {
  return (
    <div className="App">
      <UserProfile
        firstName="Logan"
        lastName="Tolbert"
        headline="C# | ASP.NET Core | JavaScript | TypeScript | React | SQL"
        location="Birmingham, AL"
        email="lodev205@gmail.com"
        imgSrc={ProfileImage}
      />
    </div>
  );
}
