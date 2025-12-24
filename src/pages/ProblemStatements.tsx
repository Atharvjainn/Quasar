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
        </div>

        <div className="mx-auto max-w-3xl text-center p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Problem Statements will be released soon</h1>
          {/* <p className="text-lg text-muted-foreground/80">We are preparing the detailed problem pages — check back soon for the full set of problem statements.</p> */}
        </div>

      </div>
    </div>
  );
};

export default ProblemStatements;
