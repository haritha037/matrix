import { TypeAnimation } from "react-type-animation";

function Writer({ text }) {
  const hintsString = text.split("-").join("\n");
  return (
    <TypeAnimation
      key={hintsString} // This forces re-render when the `text` changes
      // sequence={hintsString}
      sequence={["", 1000, hintsString]}
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
