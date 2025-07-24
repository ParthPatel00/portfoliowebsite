function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">
        Whether you want to collaborate or just say hi, feel free to reach out!
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:patelsparth00@gmail.com"
            className="text-blue-500 hover:underline"
          >
            patelsparth00@gmail.com
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/ParthPatel00"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            github.com/ParthPatel00
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/parth-patel00"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/parth-patel00
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
