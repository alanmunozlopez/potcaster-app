'use client';
import styles from '@/styles/podcast-card.module.css';
import { useState } from 'react';
import PodcastHomeCard from '@/components/PodcastHomeCard';
import Link from 'next/link';

const PodcastsHomeList = ({ podcasts = [] }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  const filteredList = !query
    ? podcasts
    : podcasts.filter(
        podcast =>
          podcast['im:name'].label
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          podcast['im:artist'].label
            .toLowerCase()
            .includes(query.toLowerCase()),
      );

  return (
    <div role="podcast-home-list" className="grid gap-6 pb-3 ">
      <div className="mt-8 w-80 justify-self-center">
        <label
          htmlFor="first_name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <input
          type="text"
          id="first_name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="All songs..."
          value={query}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.container}>
        {filteredList?.map(podcast => (
          <Link
            key={podcast.id.attributes['im:id']}
            href={`/podcast/${podcast.id.attributes['im:id']}`}
          >
            <PodcastHomeCard
              id={podcast.id.attributes['im:id']}
              image={podcast['im:image'][2].label}
              name={podcast['im:name'].label}
              author={podcast['im:artist'].label}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PodcastsHomeList;
