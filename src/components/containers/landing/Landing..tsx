import { useRouter } from "next/router";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import TextEditor from "@/components/common/TextEditor";

const Landing = () => {
  return (
    <main className="dynamic-x-padding dynamic-y-padding">
      <TextEditor />
    </main>
  );
};

export default Landing;
