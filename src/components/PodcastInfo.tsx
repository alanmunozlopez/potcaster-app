const PodcastInfo = ({
  image = '',
  name = '',
  author = '',
  description = '',
}) => {
  return (
    <div className="p-2">
      <img className="rounded-2xl shadow shadow-amber-200" src={image} />
      <div className="mt-5">
        <p className="font-bold"> {name}</p>
        <p>by {author}</p>
      </div>
      <hr className="mx-2 my-4" />
      <div className="grid gap-2">
        <p className="font-bold">Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default PodcastInfo;
