import { customIcons, getIcon } from "../../helpers/iconsHelper";

export default function CustomAppBar() {
  return (
    <div className="flex flex-row justify-between items-center p-2 border-b">
      <img src={getIcon(customIcons.avatar)} />
      <div className="flex flex-row gap-4">
        <h1>الرئيسية</h1>
        <img src={getIcon(customIcons.smallMontkaLogo)} className="w-8" />
      </div>
    </div>
  );
}
