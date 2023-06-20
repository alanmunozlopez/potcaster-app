import { PodcastListResponse } from '@/models/podcasts.models';
import { EpisodesListResponse } from '@/models/episodes.models';
import { DateTime } from 'luxon';

type storageData = {
  timestamp: number;
  data: string;
};

type parsedPodcastList = {
  timestamp: number;
  data: PodcastListResponse;
};

type parsedEpisodesList = {
  timestamp: number;
  data: EpisodesListResponse;
};

enum LocalStorageKeys {
  PODCAST_LIST = 'podcast-list',
  EPISODE_LIST = 'episodes-list-',
}

const getLocalStorageData = (
  key: string,
): parsedPodcastList | parsedEpisodesList | undefined => {
  try {
    if (typeof window !== 'undefined') {
      const savedObject: storageData | null | string =
        window.localStorage.getItem(key);

      if (!savedObject) {
        return undefined;
      }

      const parsedObject: any = JSON.parse(savedObject);

      if (!parsedObject.timestamp) {
        return undefined;
      }

      if (key === LocalStorageKeys.PODCAST_LIST) {
        return parsedObject.data?.feed?.entry?.length > 0
          ? (parsedObject as parsedPodcastList)
          : undefined;
      } else if (key.includes(LocalStorageKeys.EPISODE_LIST)) {
        console.log('ytes yes dude');
        return parsedObject?.data.results?.length > 0
          ? (parsedObject as parsedEpisodesList)
          : undefined;
      }
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getPodcastList = async (): Promise<
  PodcastListResponse | undefined
> => {
  try {
    const savedPodcasts: parsedPodcastList | parsedEpisodesList | undefined =
      getLocalStorageData(LocalStorageKeys.PODCAST_LIST);

    if (savedPodcasts !== undefined) {
      const savedDate = DateTime.fromMillis(savedPodcasts.timestamp);
      const presentDate = DateTime.now();
      const diffHours = presentDate.diff(savedDate, ['hours']).hours;
      if (savedPodcasts.data && diffHours < 23) {
        console.log('Get Podcast List from localStorage');
        return savedPodcasts.data as PodcastListResponse;
      }
    }

    const date = Date.now();
    const podcastList = await podcastListService();
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        LocalStorageKeys.PODCAST_LIST,
        JSON.stringify({ timestamp: date, data: podcastList }),
      );
    }
    console.log('Get Podcast List from iTunes API');
    return podcastList;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const podcastListService = async (): Promise<
  PodcastListResponse | undefined
> => {
  try {
    const data = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      { cache: 'no-store' },
    );
    return data.json();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getEpisodes = async (
  id: string,
): Promise<EpisodesListResponse | undefined> => {
  try {
    const savedEpisodes: parsedPodcastList | parsedEpisodesList | undefined =
      getLocalStorageData(LocalStorageKeys.EPISODE_LIST + id);

    if (savedEpisodes !== undefined) {
      const savedDate = DateTime.fromMillis(savedEpisodes.timestamp);
      const presentDate = DateTime.now();
      const diffHours = presentDate.diff(savedDate, ['hours']).hours;
      if (savedEpisodes.data && diffHours < 23) {
        console.log('Get Episodes List from localStorage');
        return savedEpisodes.data as EpisodesListResponse;
      }
    }

    const date = Date.now();
    const podcastList = await episodesListService(id);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        LocalStorageKeys.EPISODE_LIST + id,
        JSON.stringify({ timestamp: date, data: podcastList }),
      );
    }
    console.log('Get Episodes List from iTunes API');
    return podcastList;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const episodesListService = async (
  id: string,
): Promise<EpisodesListResponse | undefined> => {
  try {
    const data = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
      { cache: 'no-store' },
    );
    return data.json();
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
