export interface PodcastListResponse {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Updated;
  rights: FeedRights;
  title: FeedTitle;
  icon: Icon;
  link: FeedLink[];
  id: FeedId;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface Entry {
  'im:name': ImName;
  'im:image': ImImage[];
  'summary': Summary;
  'im:price': ImPrice;
  'im:contentType': ImContentType;
  'rights'?: Rights;
  'title': Title;
  'link': Link;
  'id': Id;
  'im:artist': ImArtist;
  'category': Category;
  'im:releaseDate': ImReleaseDate;
}

export interface ImName {
  label: string;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface Summary {
  label: string;
}

export interface ImPrice {
  label: string;
  attributes: ImPriceAttributes;
}

export interface ImPriceAttributes {
  amount: string;
  currency: string;
}

export interface ImContentType {
  attributes: ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
  term: string;
  label: string;
}

export interface Rights {
  label: string;
}

export interface Title {
  label: string;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type: string;
  href: string;
}

export interface Id {
  label: string;
  attributes: IdAttributes;
}

export interface IdAttributes {
  'im:id': string;
}

export interface ImArtist {
  label: string;
  attributes?: ImArtistAttributes;
}

export interface ImArtistAttributes {
  href: string;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  'term': string;
  'scheme': string;
  'label': string;
}

export interface ImReleaseDate {
  label: string;
  attributes: ImReleaseDataAttributes;
}

export interface ImReleaseDataAttributes {
  label: string;
}

export interface Updated {
  label: string;
}

export interface FeedRights {
  label: string;
}

export interface FeedTitle {
  label: string;
}

export interface Icon {
  label: string;
}

export interface FeedLink {
  attributes: FeedLinkAttributes;
}

export interface FeedLinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface FeedId {
  label: string;
}
