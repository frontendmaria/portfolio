import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <h1>Hero</h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>About</h2>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Skills</h2>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Projects</h2>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Contact</h2>
        </Container>
      </Section>
    </main>
  );
}