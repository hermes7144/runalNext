import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { getMarathons } from '@/service/marathons';
import { NextResponse } from 'next/server';


export async function GET() {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;
  
  // if (!user) {
  //   return new Response('Authentication Error', { status: 401})
  // }

  // const username = user.email?.split('@')[0];

  return getMarathons().then((data) => 
    NextResponse.json(data)
  )
}
