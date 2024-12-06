import { TypeAnimation } from "react-type-animation";

function Writer({ text }) {
  return (
    <TypeAnimation
      key={text} // This forces re-render when the `text` changes
      sequence={[
        // // Same substring at the start will only be typed out once, initially
        // "We produce food for Mice",
        // 1000, // wait 1s before replacing "Mice" with "Hamsters"
        // "We produce food for Hamsters",
        // 1000,
        // "We produce food for Guinea Pigs",
        // 1000,
        // "We produce food for Chinchillas",
        // 1000,
        text,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontFamily: "monospace",
      }}
      repeat={1}
    />
  );
}

export default Writer;
