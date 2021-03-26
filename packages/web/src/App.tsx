import React, { useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  PageContent,
  Chat,
  ChatContent,
  ChatRow,
  ChatUserInfo,
  ChatUserTime,
  ChatUserImage,
  ChatText,
  ChatFooter,
  ChatButton,
  ChatInput,
} from "./App.style";

const mockupMessages = [
  {
    id: 1,
    userID: 1,
    userImage: "https://via.placeholder.com/50",
    text: "Hi there, How are you?",
    time: "22:00",
  },
  {
    id: 2,
    userID: 1,
    userImage: "https://via.placeholder.com/50",
    text: "Waiting for your reply. As i have to go back soon. I have to travel long distance.",
    time: "22:00",
  },
  {
    id: 3,
    userID: 2,
    userImage: "https://via.placeholder.com/50",
    text: "Hi, I am coming there in a few minutes. Please wait!!. I am in taxi right now",
    time: "22:00",
  },
  {
    id: 4,
    userID: 1,
    userImage: "https://via.placeholder.com/50",
    text: "Thank you very much, I am waiting here at StarBuck cafe.",
    time: "22:00",
  },
]

function App() {
  const contentBottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(mockupMessages);
  const [loggedUserInfo] = useState({ userID: 2 });
  const [inputText, setInputText] = useState("");

  const sendMessage = (text: string) => {
    setMessages((previousMessages) => {
      return [
        ...previousMessages,
        {
          id: previousMessages[previousMessages.length - 1].id + 1,
          userID: loggedUserInfo.userID,
          userImage: "https://via.placeholder.com/50",
          text,
          time: "22:00",
        },
      ];
    });
    setInputText("");
    setTimeout(() => {
      contentBottomRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 20);
  }

  return (
    <PageContent>
      <Chat>
        <ChatContent>
          {messages.map((message, index) => {
            const previousMessage = messages[index === 0 ? index : index - 1];
            const isTheSameUserFromPreviousMessage = previousMessage.userID === message.userID && index !== 0;

            if (isTheSameUserFromPreviousMessage) {
              return (
                <ChatRow key={message.id} hasImage={false} isMyUser={message.userID === loggedUserInfo.userID}>
                  <ChatText isMyUser={message.userID === loggedUserInfo.userID}>
                    {message.text}
                  </ChatText>
                </ChatRow>
              );
            }

            return (
              <ChatRow key={message.id} hasImage isMyUser={message.userID === loggedUserInfo.userID}>
                <ChatUserInfo>
                  <ChatUserImage src={message.userImage} alt="User Image" />
                  <ChatUserTime>
                    {message.time}
                  </ChatUserTime>
                </ChatUserInfo>
                <ChatText isMyUser={message.userID === loggedUserInfo.userID}>
                  {message.text}
                </ChatText>
              </ChatRow>
            );
          })}
          <div ref={contentBottomRef}></div>
        </ChatContent>
        <ChatFooter>
          <ChatInput
            placeholder="Type a message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if ([e.which, e.keyCode].includes(13)) sendMessage(inputText);
            }}
          />
          <ChatButton onClick={() => sendMessage(inputText)}>
            <RiSendPlaneFill color="#fff" size={30} />
          </ChatButton>
        </ChatFooter>
      </Chat>
    </PageContent>
  );
};

export default App;
