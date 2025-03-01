import { Marathon } from '@/model/marathon';
import { client, urlFor, assetsURL } from './sanity';

export async function getMarathons() {
  return client
    .fetch(
      `*[_type == "marathon"]
      | order(_createdAt desc)`
    )
    .then(mapPosts);
};

function mapPosts(marathons: Marathon[]) {

  return marathons.map((marathon: Marathon) => ({
    ...marathon,
    likes: marathon.likes ?? [],
    image: marathon.image && urlFor(marathon.image),
  }));
}
