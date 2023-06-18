export default function PodcastLoading() {
  return (
    <div>
      <div className="grid animate-pulse grid-cols-4 content-center justify-center gap-2 p-5">
        <div className="p-2">
          <div className="h-96 rounded-2xl bg-slate-700" />
          <div className="mt-5">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-700"></div>
                <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>
          <div className="mx-2 my-4 h-1 bg-slate-700" />
          <div className="grid gap-2">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              </div>
              <div className="h-2 rounded bg-slate-700"></div>
              <div className="h-2 rounded bg-slate-700"></div>
              <div className="h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-end-5">
          <div className="mx-2 my-4 w-full min-w-full lg:w-1/3">
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
            <div className="my-4 h-16 rounded bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
