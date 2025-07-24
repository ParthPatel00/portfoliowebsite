import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import BackgroundBlob from "../components/BackgroundBlob";
function Contact() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
      <SectionHeader text="Contact" />
      <BackgroundBlob
        className="-bottom-530 -left-40 w-80 h-50"
        color="from-cyan-400 via-blue-500 to-white-500"
      />
      <p className="mb-4">
        Feel free to reach out if you'd like to collaborate or connect!
      </p>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <MdEmail className="text-blue-500" />
          <a
            href="mailto:patelsparth00@gmail.com"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition
"
          >
            patelsparth00@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub className="text-gray-700 dark:text-gray-300" />
          <a
            href="https://github.com/ParthPatel00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition
"
          >
            github.com/ParthPatel00
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin className="text-blue-600" />
          <a
            href="https://www.linkedin.com/in/parth-patel-sjsu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition
"
          >
            linkedin.com/in/parth-patel00
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
