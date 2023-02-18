import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1 className='text-center text-5xl'>Welcome {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
