import { Editor } from "novel";
import Mathematics from "@tiptap-pro/extension-mathematics";
import "katex/dist/katex.min.css";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

export default function NotesEditor() {
  Mathematics.configure({
    shouldRender: (state, pos, node) => {
      const $pos = state.doc.resolve(pos);
      return node.type.name === "text" && $pos.parent.type.name !== "codeBlock";
    },
  });

  return <Editor className="w-full flex-grow" extensions={[HorizontalRule]} />;
}
