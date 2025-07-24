import SectionHeader from "../components/SectionHeader";

function Work() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="Work Experience" />

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Software Engineer @ Deloitte</h3>
        <p className="text-sm text-zinc-500 leading-relaxed dark:text-zinc-400">
          July 2022 – Nov 2024
        </p>
        <p className="mt-8 font-medium text-sm sm:text-base leading-relaxed">
          Client: Public Health Agency of Canada
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-sm sm:text-base leading-relaxed">
          <li>
            Led a FHIR-compliant cloud-based solution, earning the Deloitte
            Silver Dot Award.
          </li>
          <li>
            Built a real-time web app using TypeScript, Python, Flask, React,
            and Azure Functions.
          </li>
          <li>
            Designed ETL pipelines for automated PII redaction and
            HIPAA-compliant data processing.
          </li>
        </ul>

        <p className="mt-8 font-medium text-sm sm:text-base leading-relaxed">
          Client: Employment and Social Development Canada
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 mt-2 text-sm sm:text-base leading-relaxed">
          <li>
            Delivered an AI chatbot replacing static guides with interactive
            walkthroughs.
          </li>
          <li>
            Created a C++ automation tool reducing ticket handling time by over
            2 hours.
          </li>
          <li>
            Optimized Java platform deployments using GitHub Actions and AWS
            Elastic Beanstalk.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Work;
