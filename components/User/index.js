import { useSession } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>User</h1>
      <p>
        {session ? `${session.user.name}さんこんにちは` : "こんにちは"}
      </p>
    </div>
  )
};

export default User;
