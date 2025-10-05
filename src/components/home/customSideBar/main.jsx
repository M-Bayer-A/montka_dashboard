export default function Main({ children, className }) {
  return (
    <div className={`${className} h-full grow overflow-auto`}>{children}</div>
  );
}
