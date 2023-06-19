import PodcastsHomeList from '@/components/PodcastsHomeList';
import { getPodcastList } from '@/services/podcasts';

export default async function Home() {
  const data = await getPodcastList();
  if (data === undefined) {
    return <div>Ooops! We have connection problems</div>;
  }
  const podcastList = data?.feed?.entry ?? [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-screen-2xl items-center justify-between font-mono text-sm">
        {podcastList.length > 0 && <PodcastsHomeList podcasts={podcastList} />}
      </div>
    </main>
  );
}
