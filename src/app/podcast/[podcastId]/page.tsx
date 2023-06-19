import Link from 'next/link';
import PodcastInfo from '@/components/PodcastInfo';
import EpisodeCardItem from '@/components/EpisodeCardItem';
import { getEpisodes, getPodcastList } from '@/services/podcasts';

export default async function PodcastPage({ params }) {
  const { podcastId } = params;
  const podcastsList = await getPodcastList();
  const episodesResult = await getEpisodes(podcastId);

  if (podcastsList === undefined || episodesResult === undefined) {
    return <div>Ooops! We have connection problems</div>;
  }

  const podcastDetails = podcastsList?.feed?.entry?.find(
    podcast => podcast?.id?.attributes['im:id'],
  );

  return (
    <div>
      <div className="grid grid-cols-4 content-center justify-center gap-2 p-5">
        <PodcastInfo
          image={episodesResult?.results[1]?.artworkUrl600}
          name={podcastDetails['im:name']?.label}
          author={podcastDetails['im:artist']?.label}
          description={podcastDetails?.summary?.label}
        />

        <div className="col-start-3 col-end-5">
          <div className="mx-2 my-4 w-full min-w-full lg:w-1/3">
            <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-gray-700 dark:to-blue-500">
              <div className="flex h-8 w-8 flex-none items-center rounded-md bg-white p-2 text-indigo-500 dark:bg-[#0F172A] dark:text-white md:h-12 md:w-12 ">
                <svg
                  width="95"
                  height="119"
                  viewBox="0 0 95 119"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.72 21.818C14.72 23.1748 14.3177 24.5011 13.5639 25.6292C12.8101 26.7573 11.7387 27.6366 10.4852 28.1558C9.23171 28.675 7.85239 28.8109 6.52168 28.5462C5.19097 28.2815 3.96864 27.6281 3.00925 26.6688C2.04986 25.7094 1.39651 24.487 1.13182 23.1563C0.867121 21.8256 1.00297 20.4463 1.52219 19.1928C2.04141 17.9393 2.92067 16.8679 4.04879 16.1141C5.17691 15.3603 6.50322 14.958 7.86 14.958C9.67882 14.9599 11.4226 15.6832 12.7087 16.9693C13.9948 18.2554 14.7182 19.9992 14.72 21.818ZM30.633 25.481H90.333C91.3045 25.481 92.2362 25.0951 92.9231 24.4081C93.6101 23.7212 93.996 22.7895 93.996 21.818C93.996 20.8465 93.6101 19.9148 92.9231 19.2279C92.2362 18.5409 91.3045 18.155 90.333 18.155H30.633C29.6615 18.155 28.7298 18.5409 28.0429 19.2279C27.3559 19.9148 26.97 20.8465 26.97 21.818C26.97 22.7895 27.3559 23.7212 28.0429 24.4081C28.7298 25.0951 29.6615 25.481 30.633 25.481ZM7.86 40.64C6.50322 40.64 5.17691 41.0423 4.04879 41.7961C2.92067 42.5499 2.04141 43.6213 1.52219 44.8748C1.00297 46.1283 0.867121 47.5076 1.13182 48.8383C1.39651 50.169 2.04986 51.3914 3.00925 52.3508C3.96864 53.3101 5.19097 53.9635 6.52168 54.2282C7.85239 54.4929 9.23171 54.357 10.4852 53.8378C11.7387 53.3186 12.8101 52.4393 13.5639 51.3112C14.3177 50.1831 14.72 48.8568 14.72 47.5C14.7182 45.6812 13.9948 43.9374 12.7087 42.6513C11.4226 41.3652 9.67882 40.6419 7.86 40.64ZM90.337 43.84H30.637C29.6655 43.84 28.7338 44.2259 28.0469 44.9129C27.3599 45.5998 26.974 46.5315 26.974 47.503C26.974 48.4745 27.3599 49.4062 28.0469 50.0931C28.7338 50.7801 29.6655 51.166 30.637 51.166H90.337C91.3085 51.166 92.2402 50.7801 92.9271 50.0931C93.6141 49.4062 94 48.4745 94 47.503C94 46.5315 93.6141 45.5998 92.9271 44.9129C92.2402 44.2259 91.3085 43.84 90.337 43.84ZM7.86 66.322C6.50322 66.322 5.17691 66.7243 4.04879 67.4781C2.92067 68.2319 2.04141 69.3033 1.52219 70.5568C1.00297 71.8103 0.867121 73.1896 1.13182 74.5203C1.39651 75.851 2.04986 77.0734 3.00925 78.0328C3.96864 78.9921 5.19097 79.6455 6.52168 79.9102C7.85239 80.1749 9.23171 80.039 10.4852 79.5198C11.7387 79.0006 12.8101 78.1213 13.5639 76.9932C14.3177 75.8651 14.72 74.5388 14.72 73.182C14.7182 71.3632 13.9948 69.6194 12.7087 68.3333C11.4226 67.0472 9.67882 66.3239 7.86 66.322ZM90.337 69.522H30.637C29.6655 69.522 28.7338 69.9079 28.0469 70.5949C27.3599 71.2818 26.974 72.2135 26.974 73.185C26.974 74.1565 27.3599 75.0882 28.0469 75.7751C28.7338 76.4621 29.6655 76.848 30.637 76.848H90.337C91.3085 76.848 92.2402 76.4621 92.9271 75.7751C93.6141 75.0882 94 74.1565 94 73.185C94 72.2135 93.6141 71.2818 92.9271 70.5949C92.2402 69.9079 91.3085 69.522 90.337 69.522Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="ml-5 flex flex-grow flex-col justify-around text-white">
                <div className="whitespace-nowrap">
                  Episodes: {episodesResult?.resultCount - 1}
                </div>
              </div>
              <div className="flex flex-none items-center text-white"></div>
            </div>
          </div>
          {episodesResult?.results?.map((episode, index) => {
            if (index === 0) {
              return;
            }
            return (
              <Link
                key={episode?.trackId}
                href={`/podcast/${podcastId}/episode/${episode?.episodeGuid}`}
              >
                <EpisodeCardItem
                  image={episodesResult?.results[1]?.artworkUrl600}
                  trackName={episode?.trackName}
                  trackTime={episode?.trackTimeMillis}
                  trackReleaseDate={episode?.releaseDate}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
