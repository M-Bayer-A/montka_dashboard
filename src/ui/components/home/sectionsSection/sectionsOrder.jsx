import { Reorder } from "framer-motion";
import CustomAccordion from "../../shared/customAccordion";
import { useDispatch, useSelector } from "react-redux";
import { sectionsSelectors } from "../../../../application/states/home/sections/sectionsSelectors";
import {
  moveDown,
  moveUp,
  toggleAddPopupOpen,
  toggleDeletePopupOpen,
  toggleEditPopupOpen,
} from "../../../../application/states/home/sections/sectionsSlice";
import CustomButton from "../../shared/customButton";

export default function SectionsOrder() {
  //
  const dispatch = useDispatch();
  //
  const sectionsOrder = useSelector(sectionsSelectors.sectionsOrder);
  //
  const handleOpenEditPopup = (name, imageUrl) =>
    dispatch(toggleEditPopupOpen({ name, imageUrl }));

  const handleOpenDeletePopup = () => dispatch(toggleDeletePopupOpen());

  const handleOpenAddPopup = () => dispatch(toggleAddPopupOpen());
  //
  return (
    <Reorder.Group
      axis="y"
      values={sectionsOrder}
      className="flex flex-col gap-5"
    >
      {sectionsOrder.map((s) => (
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
            editHandler={() => handleOpenEditPopup(s.title, s.image)}
            deleteHandler={() => handleOpenDeletePopup()}
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
                onClick={handleOpenAddPopup}
              />
            </div>
          </CustomAccordion>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
