import { DateTime, Duration } from 'luxon';

const EpisodeCardItem = ({
  image = '',
  trackName = '',
  trackTime = 0,
  trackReleaseDate = '',
}) => {
  return (
    <div
      role="episode-card-item"
      className="mx-2 my-4 w-full min-w-full lg:w-1/3"
    >
      <div className="flex w-full flex-row items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 dark:from-cyan-500 dark:to-blue-500">
        <div className="flex h-8 w-8 flex-none items-center rounded-md bg-white p-1 text-indigo-500 dark:bg-[#0F172A] dark:text-white md:h-12 md:w-12 ">
          <img className="rounded-md" src={image} />
        </div>
        <div className="ml-5 flex flex-grow flex-col justify-around text-white">
          <div className="whitespace-nowrap">{trackName}</div>
          <div className="text-xs">
            {Duration.fromMillis(trackTime).toFormat('hh:mm:ss')} |{' '}
            {DateTime.fromISO(trackReleaseDate)
              .setLocale('es')
              .toLocaleString()}
          </div>
        </div>
        <div className="flex flex-none items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCardItem;
