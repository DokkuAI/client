"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const ProjectCards = ({ pinned }: { pinned: boolean }) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    getProjectFiles();
    async function getProjectFiles() {
      const { data } = await axios.get("http://localhost:8080/v1/library");
      pinned?   setFiles(data.slice(5, 8)):   setFiles(data.slice(0,5));

    }
  }, [pinned]);
  return (
    <>
      {files.map((file: any, index: number) => {
        return <Card
          key={index}
          pinned={pinned}
          name={file.author || "me"}
          date={file.createdAt || "-"}
          title={file.name || "Telepathy"}
          avatar="/Avatar.png"
        />;
      })}
    </>
  );
};

export default ProjectCards;
