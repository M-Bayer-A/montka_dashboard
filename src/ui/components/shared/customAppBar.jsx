import { customIcons, getIcon } from "../../../helpers/iconsHelper";

export default function CustomAppBar({ onClick }) {
  return (
    <div className="flex flex-row justify-between items-center p-2 border-b">
      <img src={getIcon(customIcons.avatar)} />
      <div className="flex flex-row items-center gap-4 text-[20px] font-[600] font-[Cairo]">
        <div className="flex flex-row gap-0.5">
          <span className="text-zinc-200">/</span>
          <h1>الرئيسية</h1>
        </div>
        <img src={getIcon(customIcons.smallMontkaLogo)} className="w-10" />
        <button onClick={onClick}>
          <img src={getIcon(customIcons.sideBar)} />
        </button>
      </div>
    </div>
  );
}
