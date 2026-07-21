import { useState } from "react";
import { FaCheck, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";

/** Envelope button that copies the email address; mailto is unreliable without a mail client. */
function CopyEmailIcon({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied!" : `Copy ${profile.email}`}
      className={className}
    >
      {copied ? <FaCheck className="text-lg text-accent" /> : <FaEnvelope className="text-lg" />}
    </button>
  );
}

export default CopyEmailIcon;
