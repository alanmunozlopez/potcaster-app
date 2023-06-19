import Link from 'next/link';
import PodcastInfo from '@/components/PodcastInfo';
import { getEpisodes, getPodcastList } from '@/services/podcasts';
import { unEscape } from '@/lib/utils';

type Params = {
  params: {
    podcastId: string;
    episodeId: string;
  };
};

export default async function EpisodePage({ params }: Params) {
  const { episodeId, podcastId } = params;
  const podcastsList = await getPodcastList();
  const episodesResult = await getEpisodes(podcastId);

  if (podcastsList === undefined || episodesResult === undefined) {
    return <div>Ooops! We have connection problems</div>;
  }

  const episode = episodesResult?.results?.find(
    ep => ep.episodeGuid === episodeId,
  );
  const podcastDetails = podcastsList?.feed?.entry?.find(
    podcast => podcast.id?.attributes['im:id'],
  );

  if (episode === undefined || podcastDetails === undefined) {
    return <div></div>;
  }

  return (
    <div className="grid grid-cols-4 content-center justify-center gap-2 p-5">
      <Link href={`/podcast/${podcastId}`}>
        <PodcastInfo
          image={episodesResult?.results[1]?.artworkUrl600}
          name={podcastDetails['im:name']?.label}
          author={podcastDetails['im:artist']?.label}
          description={podcastDetails?.summary?.label}
        />
      </Link>

      <div className="col-start-3 col-end-5">
        <div className="w-full min-w-full p-2 lg:w-1/3">
          <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-cyan-500 dark:to-blue-500">
            <div className="px-5">
              <h2 className="my-5 text-lg font-bold">{episode?.trackName}</h2>
              <p className="my-5">{unEscape(episode?.description ?? '')}</p>
              <audio
                className="my-5 w-full min-w-full"
                src={episode?.episodeUrl}
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
