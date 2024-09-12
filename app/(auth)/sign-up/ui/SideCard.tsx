import clsx from "clsx";
;
type cardInputs = {
  svg: React.ReactNode;
  path: String;
  route: String;
  title: String;
  description: String;
};


export function SideCard({ svg, path, route, title, description }: cardInputs) {
  return (
    <div
      className={clsx("flex gap-[17px]", {
        "text-[#171A1F]": path === route,
        "text-[#9095A0]": path !== route,
      })}
    >
  {svg} 
      <div className="flex flex-col leading-[26px] text-[16px]">
        <div className="font-bold">{title}</div>
        <div className="font-normal">{description}</div>
      </div>
    </div>
  );
}
