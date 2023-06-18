import styles from '@/styles/podcast-card.module.css';

export default function HomeLoading() {
  return (
    <div className="grid animate-pulse gap-6 pb-3 ">
      <div className="mt-8 w-80 justify-self-center">
        <div className="grid gap-2">
          <div className="mb-3 space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 h-2 rounded-md bg-slate-700"></div>
            </div>
          </div>
        </div>
        <div className="h-10 rounded-md bg-slate-700" />
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="rounded-2xl bg-slate-700"></div>
          <div className={styles.details}>
            <div className="rounded-2xl bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
