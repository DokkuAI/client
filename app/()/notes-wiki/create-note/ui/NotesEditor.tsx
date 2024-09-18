"use client";

import { JSONContent } from "novel";
import Editor from "@/components/(editor)/Editor";
import React, { useState } from "react";

const NotesEditor = () => {
  const [noteContent, setNoteContent] = useState<JSONContent>({
    type: "doc",
    content: [],
  });
  const handleNoteChange = (content: JSONContent) => {
    setNoteContent(content);
  };
  return (
    <div className="flex flex-col border w-full min-h-dvh gap-6 rounded-md bg-card">
      <Editor initialValue={noteContent} onChange={handleNoteChange} />
    </div>
  );
};

export default NotesEditor;
