import { useDispatch, useSelector } from "react-redux";
import CustomAccordion from "../../../components/shared/customAccordion";
import CustomButton from "../../../components/shared/customButton";
import { sectionsSelectors } from "../../../../application/states/home/sections/sectionsSelectors";
import {
  moveDown,
  moveUp,
} from "../../../../application/states/home/sections/sectionsSlice";
import { Reorder } from "framer-motion";
import { useEffect } from "react";
import { getSectionsInfoUseCase } from "../../../../application/useCases/home/sections/getSectionsInfoUseCase";
import Skeleton from "react-loading-skeleton";

export default function SectionsSection() {
  const dispatch = useDispatch();
  //
  const sectionsInfo = useSelector(sectionsSelectors.sectionsInfo);
  const isLoading = useSelector(sectionsSelectors.isLoading);
  //
  useEffect(() => {
    dispatch(getSectionsInfoUseCase());
  }, [dispatch]);
  //
  return (
    <div className="min-h-full w-full min-w-[750px] flex flex-col p-4 gap-5 font-[Cairo]">
      <div className="w-full flex flex-row justify-between gap-1">
        <CustomButton
          className="bg-[#0EA5E9] border-[#0EA5E9] font-[700] text-white"
          title={"+ إضافة قسم رئيسي"}
        />
        <h1 className="font-[700] text-[24px]">الأقسام الرئيسية والفرعية</h1>
      </div>
      {/*  */}
      {isLoading ? (
        <>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="w-full h-25">
            <Skeleton width="100%" height="100%" />
          </div>
        </>
      ) : (
        <Reorder.Group
          axis="y"
          values={sectionsInfo}
          className="flex flex-col gap-5"
        >
          {sectionsInfo.map((s) => (
            <Reorder.Item
              key={s.id}
              value={s}
              dragListener={false}
              transition={{ duration: 0.3 }}
            >
              <CustomAccordion
                className={"w-full"}
                image={s.image}
                title={s.title}
                moveUpHandler={() => dispatch(moveUp({ id: s.id }))}
                moveDownHandler={() => dispatch(moveDown({ id: s.id }))}
              >
                <div className="w-full flex flex-col items-center p-5 gap-5">
                  {s.subSections ? (
                    s.subSections.map((u) => (
                      <div
                        key={u.id}
                        className="w-full flex flex-row justify-between p-2.5 gap-2.5 bg-white rounded-[7px]"
                      >
                        <div className="flex flex-row gap-2.5">
                          <a className="text-[#E24C4C]">حذف</a>
                          <a className="text-[#4F46E5]">تعديل</a>
                        </div>
                        <p className="text-[#717886]">{u.title}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[#717886]">
                      لا توجد أقسام فرعية . يمكنك إضافة واحد
                    </p>
                  )}
                  <CustomButton
                    title={"+ إضافة قسم فرعي جديد"}
                    className="w-full bg-[#F0F9FF] border-[#CAEBFC] font-[700] text-[#0369A1]"
                  />
                </div>
              </CustomAccordion>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </div>
  );
}
