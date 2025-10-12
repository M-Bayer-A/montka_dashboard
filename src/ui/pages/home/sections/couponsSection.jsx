import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CouponsSection() {
  return (
    <div>
      <div>
        <Skeleton height={20} className="rounded-[100px]" />
        <Skeleton count={10} height={20} />
      </div>
    </div>
  );
}
