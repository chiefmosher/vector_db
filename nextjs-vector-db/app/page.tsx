"use client";
import Image from "next/image";
import tantiveLogo from "./assets/Tantive_Logo.png";

import { useChat } from "ai/react";
import { Message } from "ai";

import Bubble from "./components/Bubble";
import PromptSuggestionsRow from "./components/PromptSuggestionsRow";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
  const {
    append,
    input,
    isLoading,
    messages,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessages = !messages || messages.length === 0;

  const handlePrompt = (promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg);
  };

  return (
    <main>
      <Image src={tantiveLogo} width="250" alt="Tantive Logo" />
      <section className={noMessages ? "" : "populated"}>
        {noMessages ? (
          <>
            <p className="starter-text">
              Alles was du über die Tantive wissen willst, aber nie zu fragen
              gewagt hast.
            </p>
            <br />
            <>
              <PromptSuggestionsRow onPromptClick={handlePrompt} />
            </>
          </>
        ) : (
          <>
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>

      <form onSubmit={handleSubmit}>
        <input
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Frag was!"
        />
        <input type="submit" value="Senden" />
      </form>
    </main>
  );
};

export default Home;
