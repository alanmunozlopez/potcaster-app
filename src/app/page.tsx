import PodcastsHomeList from '@/components/PodcastsHomeList';
import { PodcastListResponse } from '@/models/podcasts.models';
import { utils } from '@/lib/utils';

const getPodcastList = async (): Promise<PodcastListResponse> => {
  const data = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  );
  await utils(1000);
  return data.json<PodcastListResponse>();
};

export default async function Home() {
  const data = await getPodcastList();
  const podcastList = data?.feed?.entry ?? [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-screen-2xl items-center justify-between font-mono text-sm">
        {podcastList.length > 0 && <PodcastsHomeList podcasts={podcastList} />}
      </div>
    </main>
  );
}
