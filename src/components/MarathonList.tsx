'use client';

import useMarathons from '@/hooks/useMarathons';
import GridSpninner from './ui/GridSpninner';

export default function MarathonList() {
  const { marathons, isLoading: loading, error } = useMarathons();

  return <section>
    {loading && <div className='text-center mt-32'><GridSpninner /></div>}
    {marathons &&
    <ul>
    {marathons.map((marathon, index) => <li key={marathon.id} className='mb-4'><PostListCard post={marathon} priority={index < 2}/></li>)}
  </ul>
  }
  </section>;
  }