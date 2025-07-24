import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "QuizMaster",
    description:
      "An AI-powered full-stack quiz generation platform that allows users to upload documents and generate custom quizzes using Google Gemini. Includes login, document storage, and quiz history.",
    live: "https://quiz-master-parth-patels-projects-e3c16659.vercel.app/",
    github: "https://github.com/ParthPatel00/QuizMaster",
    stack: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Gemini API",
      "Firebase",
    ],
  },
  {
    name: "Number Recognition with Neural Network",
    description:
      "A deep learning classifier built using a custom artificial neural network from scratch to recognize handwritten digits, trained on the MNIST dataset.",
    github: "https://github.com/ParthPatel00/ANN-Number-Recognition",
    stack: ["Python", "NumPy", "Matplotlib"],
  },
  {
    name: "Amazon Book Review Classification",
    description:
      "A machine learning pipeline that classifies Amazon book reviews into positive or negative using TF-IDF and various ML models including SVM and Logistic Regression.",
    github: "https://github.com/ParthPatel00/AmazonReviewClassifier",
    stack: ["Python", "scikit-learn", "Pandas"],
  },
  {
    name: "Neighborhood Business Classification",
    description:
      "A geospatial ML model that uses business location data to predict and classify businesses across neighborhoods using clustering and classification techniques.",
    github: "https://github.com/ParthPatel00/BusinessClassifier",
    stack: ["Python", "scikit-learn", "Seaborn", "Matplotlib"],
  },
];

function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{proj.name}</h3>
              <div className="space-x-4">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt size={12} />
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-300 flex items-center gap-1"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
            <p className="text-sm mt-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-3 text-sm">
              {proj.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
