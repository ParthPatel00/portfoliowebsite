import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="Contact" />

      <p className="mb-4">
        Feel free to reach out if you'd like to collaborate or connect!
      </p>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <MdEmail className="text-blue-500" />
          <a href="mailto:patelsparth00@gmail.com" className="hover:underline">
            patelsparth00@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub className="text-gray-700 dark:text-gray-300" />
          <a
            href="https://github.com/ParthPatel00"
            target="_blank"
            className="hover:underline"
          >
            github.com/ParthPatel00
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin className="text-blue-600" />
          <a
            href="https://www.linkedin.com/in/parth-patel00"
            target="_blank"
            className="hover:underline"
          >
            linkedin.com/in/parth-patel00
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
