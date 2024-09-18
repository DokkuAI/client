"use client";

import Editor from "../../components/(editor)/Editor";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import PdfBar from "./ui/PdfBar";
import UtilityBar from "./ui/UtilityBar";
import { useState } from "react";
import FileView from "./(file-renderer)/FileView";
import { JSONContent } from "novel";
import CommentBox from "./(comment)/CommentBox";
import Chat from "./(chat)/Chat";

export default function Page() {
  const [chat, setChat] = useState<boolean>(true);
  const [comment, setComment] = useState<boolean>(false);
  const [note, setNote] = useState<boolean>(false);

  const [noteContent, setNoteContent] = useState<JSONContent>({
    type: "doc",
    content: [],
  });

  const handleNoteChange = (content: JSONContent) => {
    setNoteContent(content);
  };

  return (
    <div className="h-dvh flex  flex-col ">
      <div className="w-full flex">
        <PdfBar />
        <UtilityBar
          chat={chat}
          setChat={setChat}
          comment={comment}
          setComment={setComment}
          note={note}
          setNote={setNote}
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
              <CommentBox />
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
              <Chat/>
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
              <div className="flex flex-col p-2 border w-full gap-6 rounded-md bg-card">
                <Editor
                  initialValue={noteContent}
                  onChange={handleNoteChange}
                />
              </div>
            </Panel>
          </>
        ) : null}
      </PanelGroup>
    </div>
  );
}
