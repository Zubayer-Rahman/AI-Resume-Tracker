import { resumes } from "../../Constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyer" },
    { name: "description", content: "Analyze your resume with the help of an AI" },
  ];
}

export default function Home() {
  return(
    <main className="bg-[url('public/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>
      </section>


      {resumes.map((resume) => (
        <ResumeCard />
      ))}
    </main>
  );
}
