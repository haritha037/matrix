import { TypeAnimation } from "react-type-animation";

function Writer({ text }) {
  const hintsArr = text.split("-").join("\n");
  return (
    <TypeAnimation
      key={hintsArr} // This forces re-render when the `text` changes
      sequence={hintsArr}
      wrapper="span"
      cursor={false}
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontFamily: "monospace",
        whiteSpace: "pre-line",
      }}
      repeat={0}
    />
  );
}

export default Writer;
