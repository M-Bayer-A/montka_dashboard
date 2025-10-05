export default function SideBarFooter({ children, className }) {
  return (
    <>
      <hr />
      {/* SideBar Footer */}
      <div className={`${className} px-5 py-2.5`}>{children}</div>
      {/* ==SideBar Footer== */}
    </>
  );
}
