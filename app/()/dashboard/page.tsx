import ActivityIcon from "@/public/Activity.svg";

import Projects from "./ui/Projects";
import Button from "../ui/Button";
import EditIcon from "@/public/Edit.svg";
import ProjectCard from "./ui/ProjectCard";
import { Log } from "./ui/Log";

const page = () => {
  return (
    <div className="flex gap-6 p-5">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
            Recently Viewed
          </div>
          <div className="flex gap-5">
            <ProjectCard
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />{" "}
            <ProjectCard
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />{" "}
            <ProjectCard
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />{" "}
            <ProjectCard
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
            Pinned
          </div>
          <div className="flex gap-5">
            <ProjectCard
              pinned={true}
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />
            <ProjectCard
              pinned={true}
              name="Devesh Singh"
              date="16:00 - Sep 25, 2022"
              title="Telepathy"
              avatar="/Avatar.png"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[20px] leading-[30px] font-bold">
            My Projects
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <Button title="Create New" svg={EditIcon} />
            </div>
            <Projects />
          </div>
        </div>
      </div>
      <div className="min-w-[420px] flex flex-col gap-5 p-4">
        <div className="text-[20px] leading-[30px] font-bold text-[#323842]">
          Activity Logs
        </div>
        <div className="flex-grow w-full">
          <Log
            name="Devesh Singh"
            date="16:00 - Sep 25, 2022"
            title="Created Workspace for managing research"
            avatar="/Avatar.png"
            svg={ActivityIcon}
          />
          <BlueLine />
          <Log
            name="Devesh Singh"
            date="16:00 - Sep 25, 2022"
            title="Created Workspace for managing research"
            avatar="/Avatar.png"
            svg={ActivityIcon}
          />
          <BlueLine />
          <Log
            name="Devesh Singh"
            date="16:00 - Sep 25, 2022"
            title="Created Workspace for managing research"
            avatar="/Avatar.png"
            svg={ActivityIcon}
          />
          <BlueLine />
          <Log
            name="Devesh Singh"
            date="16:00 - Sep 25, 2022"
            title="Created Workspace for managing research"
            avatar="/Avatar.png"
            svg={ActivityIcon}
          />
          <BlueLine />
          <Log
            name="Devesh Singh"
            date="16:00 - Sep 25, 2022"
            title="Created Workspace for managing research"
            avatar="/Avatar.png"
            svg={ActivityIcon}
          />
        </div>
      </div>
    </div>
  );
};

function BlueLine() {
  return <div className="mx-6 h-10 border-l-2 border-[#5E8AF7]"></div>;
}

export default page;
