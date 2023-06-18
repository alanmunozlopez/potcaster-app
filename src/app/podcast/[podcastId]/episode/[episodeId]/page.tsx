import Link from 'next/link';
import PodcastInfo from '@/components/PodcastInfo';
import { PodcastListResponse } from '@/models/podcasts.models';
import { EpisodesListResponse } from '@/models/episodes.models';
import { unEscape, utils } from '@/lib/utils';

const getPodcastList = async (): Promise<PodcastListResponse> => {
  const data = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  );
  return data.json<PodcastListResponse>();
};

const getEpisodes = async (id: string): Promise<EpisodesListResponse> => {
  const data = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
  );
  await utils(1000);
  return data.json()<EpisodesListResponse>;
};

export default async function EpisodePage({ params }) {
  const { episodeId, podcastId } = params;
  const podcastsList = await getPodcastList();
  const episodesResult = await getEpisodes(podcastId);

  const episode = episodesResult?.results?.find(
    ep => ep.episodeGuid === episodeId,
  );
  const podcastDetails = podcastsList?.feed?.entry?.find(
    podcast => podcast.id?.attributes['im:id'],
  );

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
              <p className="my-5">{unEscape(episode?.description)}</p>
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
