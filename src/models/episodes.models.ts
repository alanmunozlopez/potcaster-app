export interface EpisodesListResponse {
  resultCount: number;
  results: EpisodeResult[];
}

export interface EpisodeResult {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: any[];
  artistIds?: number[];
  previewUrl?: string;
  episodeGuid?: string;
  description?: string;
  closedCaptioning?: string;
  episodeUrl?: string;
  artworkUrl160?: string;
  episodeFileExtension?: string;
  episodeContentType?: string;
  shortDescription?: string;
}
