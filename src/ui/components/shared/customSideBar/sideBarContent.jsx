export default function SideBarContent({ children, className }) {
  return <div className={`${className} p-5 grow`}>{children}</div>;
}
