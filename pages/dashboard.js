import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Graph from '../components/Graph';
import { MdAccountBox, MdOutlineUploadFile, MdLogout } from "react-icons/md";
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from "react-icons/gi";
import Image from 'next/image';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //   router.push('/login');
  //   return null;
  // }

  return (
    <div className="flex min-h-screen bg-gray-300 grid-cols-2 justify-around text-center">

      <div className='w-1/4 p-6'>

        <div className='p-1 flex grid-cols-2 bg-gray-200 rounded-xl justify-center items-center'>
          <Image className='rounded-full' src={"/assets/Sicelo.png"} width={50} height={20}></Image>
          <h1 className='p-5'>Sicelo Gumede</h1>
        </div>

        <div className='pt-5'>
          <h1 className='text-left text-indigo-500 text-xl font-bold'>Actions</h1>
          <div className='text-left'>

            <div className='flex items-center'>
              <span className="icon flex items-center px-4">
                <MdOutlineUploadFile size={25} />
              </span>
              <p className='pt-2 pl-2 pb-2'>Upload Documents</p>
            </div>

            <div className='flex items-center'>
              <span className="icon flex items-center px-4">
                <MdLogout size={25} />
              </span>
              <p className='pt-2 pl-2 pb-2'>Sign Out</p>
            </div>
          </div>
        </div>

      </div>

      <div className='w-3/4 grid-rows-2'>

        <div class="h-1/4 grid-cols-3 flex">

          <div class="flex w-full justify-center items-center">
            <div class="p-8 bg-indigo-400 rounded-l-2xl">
              <span className="icon flex items-center px-4 relative">
                <GiReceiveMoney size={25} />
              </span>
            </div>
            <div class="bg-gray-200 p-8 rounded-2xl rounded-l-none">
              <h1>Total Income</h1>
              <h1 className='absolute font-bold text-yellow-500'>R 154 952</h1>
            </div>
          </div>

          <div class="flex w-full justify-center items-center">
            <div class="p-8 bg-indigo-400 rounded-l-2xl">
              <span className="icon flex items-center px-4 relative">
                <GiPayMoney size={25} />
              </span>
            </div>
            <div class="bg-gray-200 p-8 rounded-2xl rounded-l-none">
              <h1>Total Expense</h1>
              <h1 className='absolute font-bold text-red-500'>R 12 021</h1>
            </div>
          </div>  

          <div class="flex w-full justify-center items-center">
            <div class="p-8 bg-indigo-400 rounded-l-2xl">
              <span className="icon flex items-center px-4 relative">
                <GiMoneyStack size={25} />
              </span>
            </div>
            <div class="bg-gray-200 p-8 rounded-2xl rounded-l-none">
              <h1>Balance</h1>
              <h1 className='absolute font-bold text-green-500'>R 142 931</h1>
            </div>
          </div>
          
        </div>


        <div className='flex h-3/4 grid-cols-2' id='graphs'>

          <div className='w-1/3'>
              <Graph key={"Bar"}></Graph>
          </div>

          {/* <div className=' w-2/3'>
              <Graph></Graph>
          </div> */}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;