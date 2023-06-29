import { useSession, signOut } from "next-auth/react";

const User = ({ setPanel }) => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: 'http://localhost:3000' });
  };

  return (
    <div>
      <h1>User</h1>
      <p>
        {session ? `${session.user.name}さんこんにちは` : "こんにちは"}
      </p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  )
};

export default User;
