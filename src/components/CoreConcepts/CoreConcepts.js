import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept}></CoreConcept>
        ))}
      </ul>
    </Section>
  );
}
