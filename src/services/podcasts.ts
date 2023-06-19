import { PodcastListResponse } from '@/models/podcasts.models';
import { EpisodesListResponse } from '@/models/episodes.models';
import { utils } from '@/lib/utils';

export const getPodcastList = async (): Promise<
  PodcastListResponse | undefined
> => {
  try {
    const data = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );
    await utils(1000);
    return data.json<PodcastListResponse>();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getEpisodes = async (
  id: string,
): Promise<EpisodesListResponse | undefined> => {
  try {
    const data = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
      { next: { revalidate: 86400 } },
    );
    await utils(1000);
    return data.json<EpisodesListResponse>();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
