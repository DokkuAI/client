"use client";

import Editor from "./ui/NotesEditor";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import PdfBar from "./ui/PdfBar";
import UtilityBar from "./ui/UtilityBar";
import { useState } from "react";
import FileView from "./ui/PdfView";
import { JSONContent } from "novel";

export default function Page() {
  const [chat, setChat] = useState<boolean>(false);
  const [comment, setComment] = useState<boolean>(false);
  const [note, setNote] = useState<boolean>(false);
  // TODO: Check this
  const [noteContent, setNoteContent] = useState<JSONContent | null>(null);

  const handleNoteChange = (content: JSONContent) => {
    setNoteContent(content);
  };
  // Check this

  return (
    <div className="h-dvh flex  flex-col">
      <div className="w-full flex">
        <PdfBar />
        <UtilityBar
          chat={chat}
          setChat={setChat}
          comment={comment}
          setComment={setComment}
          note={note}
          setNote={setNoteContent}
        />
      </div>

      <PanelGroup direction="horizontal" className="flex flex-grow">
        <Panel defaultSize={30} minSize={20} collapsible={true}>
          <FileView />
        </Panel>
        {comment ? (
          <>
            <PanelResizeHandle className="gutter gutter-horizontal" />
            <Panel
              className="flex"
              defaultSize={30}
              minSize={20}
              collapsible={true}
            >
              <div className="flex-grow bg-blue-500 flex items-center  justify-center">
                comments
              </div>
            </Panel>
          </>
        ) : null}
        {chat ? (
          <>
            <PanelResizeHandle className="gutter gutter-horizontal" />
            <Panel
              order={1}
              className="flex"
              defaultSize={30}
              minSize={20}
              collapsible={true}
            >
              <div className="flex-grow bg-green-500 flex items-center  justify-center">
                chat
              </div>
            </Panel>
          </>
        ) : null}
        {note ? (
          <>
            <PanelResizeHandle className="gutter gutter-horizontal" />
            <Panel
              order={2}
              className="flex overflow-y-auto"
              defaultSize={30}
              minSize={20}
              collapsible={true}
            >
              <Editor onChange={handleNoteChange} />
            </Panel>
          </>
        ) : null}
      </PanelGroup>
    </div>
  );
}
