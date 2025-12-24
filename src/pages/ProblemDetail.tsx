import { useParams, Link } from "react-router-dom";
import problems from "@/data/problemStatements";

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const problem = problems.find((p) => p.id === (id || ""));

  if (!problem) {
    return (
      <div className="container mx-auto py-24">
        <Link to="/problem-statements" className="text-sm text-primary underline mb-4 inline-block">← Back to Problem Statements</Link>
        <h1 className="text-2xl font-bold">Problem not found</h1>
        <p className="text-muted-foreground mt-2">We couldn't find that problem. Please select one from the list.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24">
      <Link to="/problem-statements" className="text-sm text-primary underline mb-6 inline-block">← Back to Problem Statements</Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans text-white">{problem.id}. {problem.title}</h1>

      {problem.sections.map((s) => (
        <section key={s.title} className="mb-10 md:mb-14">
          <h3 className="text-xl md:text-2xl font-semibold mt-8 md:mt-12 mb-4 font-sans tracking-tight text-green-600 dark:text-green-300">{s.title}</h3>
          <div className="text-sm text-muted-foreground leading-tight">
            {s.content.map((p, idx) => (
              <p key={idx} className="mb-1">{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProblemDetail;
