import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import problems from "@/data/problemStatements";

const ProblemStatements = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto py-24 mt-10 pt-28">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold font-sans">Problem Statements</h1>
          <a href="/problem-statements/all-problem-statement.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Download Problem Statements (PDF)
          </a>
        </div>

        <div className="grid gap-4">
          {problems.map((p) => (
            <Link
              key={p.id}
              to={`/problem-statements/${p.id}`}
              className="block p-4 rounded-md glass hover:shadow-md transition"
            >
              <h2 className="text-lg md:text-xl font-medium font-sans mb-2 text-green-500 dark:text-green-400">{p.id}. {p.title}</h2>
              <p className="text-sm text-muted-foreground leading-tight">{p.short}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground/90 animate-fade-in-up">✨ More problem statements are on the way — stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
