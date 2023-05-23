export const FeedLoading: React.FC = () => {
  return (
    <ul className="mt-2 flex list-none flex-col space-y-2 px-4">
      {[...Array(10).keys()].map((i) => {
        return (
          <li key={i}>
            <div className="inline-block h-4 w-full animate-pulse justify-center rounded-lg bg-slate-600"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedLoading;
