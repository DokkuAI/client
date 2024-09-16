import MicrophoneIcon from "@/public/MicrophoneIcon.svg";
import SendIcon from "@/public/SendIcon.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import Message from "./ui/Message";
import messages from "./messages";
import Tag from "./ui/Tag";
import MagicWandIcon from "@/public/MagicWand.svg"
import SearchContentIcon from "@/public/SearchContent.svg" 
import ShootingStarIcon from "@/public/ShootingStar.svg"
import AlignBottomIcon from "@/public/AlignBottom.svg"
import InputBox from "../ui/InputBox";

function Chat() {
    const messageContainer = useRef(null);
  const { register, handleSubmit } = useForm();
  const [mssg, setMssg] = useState(messages)
  const onSubmit = (data: any) => setMssg((mssg) => [...mssg, {name: "Devesh Singh", src: "/Devesh.png", content: data.inputText}]);
  return (
    <div className="flex flex-col p-5 w-full gap-3">
      <div
        className="flex-grow w-full flex flex-col gap-6 items-start overflow-y-auto"
        ref={messageContainer}
      >
        {mssg.map((message, index) => {
          return <Message message={message} key={index} />;
        })}
      </div>
      <div className="flex justify-around flex-wrap gap-2">
        <Tag title="Summarise" src={MagicWandIcon} alt="magic wand icon" />
        <Tag
          title="Explain section wise"
          src={SearchContentIcon}
          alt="search content icon"
        />
        <Tag
          title="Explain me a topic"
          src={ShootingStarIcon}
          alt="shooting star icon"
        />
        <Tag
          title="What are takeaways?"
          src={AlignBottomIcon}
          alt="align bottom icon"
        />
      </div>
      <InputBox placeholder="Ask the document a question..." />
    </div>
  );
}

export default Chat;