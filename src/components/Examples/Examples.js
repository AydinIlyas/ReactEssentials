import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../TabButton/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabContent = (
    <p
      style={{
        padding: "0 0 20vmin 10vmin",
        textAlign: "left",
        fontSize: "3vmin",
      }}
    >
      Please select a topic.
    </p>
  );
  selectedTopic &&
    (tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ));
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
