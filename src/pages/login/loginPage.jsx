import { customIcons, getIcon } from "../../helpers/iconsHelper";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col-reverse gap-3 p-3 bg-zinc-100">
      {/* BLACK SIDE */}
      <div className="flex  w-1/2 h-full rounded-[20px] p-25 font-[Geist] text-lg bg-[#1F2937] text-amber-50">
        <img src={getIcon(customIcons.montkaLogo)} />
      </div>
      {/* ==BLACK SIDE == */}
      {/* WHITE SIDE */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <form className="flex flex-col items-center w-115 px-5 py-10 rounded-[20px] space-y-6 bg-white font-[Cairo]">
          <h1 className="font-[700] text-[22px]">تسجيل الدخول</h1>
          <div className="w-full flex flex-col items-end space-y-2">
            <label className="font-[400] text-[14px]">البريد الإلكتروني</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-zinc-200 rounded-md"
            />
          </div>
          <div className="w-full flex flex-col items-end space-y-2">
            <label className="font-[400] text-[14px]">كلمة المرور</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-zinc-200 rounded-md"
            />
          </div>
          <button className="px-3.5 py-1.5 rounded-[7px] bg-[#0EA5E9] text-white font-[700] text-[18px]">
            تسجيل الدخول
          </button>
          <div className="w-full text-end underline font-[400] text-[14px]">
            <a
              onClick={() => {
                console.log("clicked");
              }}
            >
              نسيت كلمة المرور
            </a>
          </div>
        </form>
      </div>
      {/* ==WHITE SIDE== */}
    </div>
  );
}
