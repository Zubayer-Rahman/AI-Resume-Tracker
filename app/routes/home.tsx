import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyer" },
    { name: "description", content: "Analyze your resume with the help of an AI" },
  ];
}

export default function Home() {
  return(
    <main>

    </main>
  );
}
