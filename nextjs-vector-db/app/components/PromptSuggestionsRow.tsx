import PromptSuggestionsButton from "./PromptSuggestionsButton";

const PromptSuggestionsRow = ({ onPromptClick }) => {
  const prompts = [
    "Wann wurde die Tantive gegründet?",
    "Wie viele Mitarbeiter hat die Tantive?",
  ];
  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionsButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};

export default PromptSuggestionsRow;
