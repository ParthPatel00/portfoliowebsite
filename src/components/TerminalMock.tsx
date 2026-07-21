import { useEffect, useRef, useState } from "react";

interface Line {
  text: string;
  kind: "input" | "output" | "accent";
}

const PROMPT = "visitor@parth:~$";

const FILES: Record<string, string[]> = {
  "about.txt": [
    "Software engineer. Health and finance systems.",
    "Ships things, then sticks around to run them.",
  ],
  "hot-takes.md": [
    "1. Boring tech wins.",
    "2. Tests are a love letter to your future self.",
    "3. If it needs a diagram, draw the diagram.",
    "4. Slow is smooth, smooth is fast.",
  ],
  "coffee.log": [
    "[06:58] cup 1 initialized",
    "[10:12] cup 2 initialized",
    "[14:47] WARN: heap size increasing",
    "[23:31] ERROR: sleep not found. retrying...",
  ],
  ".plan": ["build. measure. simplify. repeat."],
};

const FORTUNES = [
  "A deployed project is worth two in the backlog.",
  "There are only two hard things in CS: cache invalidation, naming things, and off-by-one errors.",
  "Weeks of coding can save you hours of planning.",
  "It works on my machine (and yours, this one's a static site).",
];

const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    { text: "whoami       - who is this guy", kind: "output" },
    { text: "ls           - look around", kind: "output" },
    { text: "cat <file>   - read a file", kind: "output" },
    { text: "uptime       - system status", kind: "output" },
    { text: "fortune      - free wisdom", kind: "output" },
    { text: "clear        - clean slate", kind: "output" },
  ],
  whoami: () => [
    { text: "parth", kind: "accent" },
    { text: "software engineer. curious by default.", kind: "output" },
  ],
  ls: () => [{ text: "about.txt   hot-takes.md   coffee.log   .plan", kind: "output" }],
  "ls -a": () => [{ text: ".   ..   .plan   about.txt   hot-takes.md   coffee.log", kind: "output" }],
  uptime: () => [
    { text: "up 3+ years in production, load average: healthy", kind: "output" },
    { text: "curiosity: 100% · imposter syndrome: managed", kind: "output" },
  ],
  fortune: () => [
    { text: FORTUNES[Math.floor(Math.random() * FORTUNES.length)], kind: "output" },
  ],
  pwd: () => [{ text: "/home/parth", kind: "output" }],
};

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();
  if (cmd.startsWith("sudo")) {
    return [
      { text: "parth is not in the sudoers file.", kind: "output" },
      { text: "This incident will be reported (to nobody).", kind: "output" },
    ];
  }
  if (cmd.startsWith("cat ")) {
    const file = cmd.slice(4).trim();
    const contents = FILES[file];
    return contents
      ? contents.map((text) => ({ text, kind: "output" as const }))
      : [{ text: `cat: ${file}: No such file`, kind: "output" }];
  }
  if (cmd === "cat") return [{ text: "usage: cat <file>", kind: "output" }];
  const handler = COMMANDS[cmd];
  return handler
    ? handler()
    : [{ text: `command not found: ${cmd}. try "help"`, kind: "output" }];
}

const INITIAL: Line[] = [
  { text: '// A tiny corner of my machine. Type "help" to poke around.', kind: "output" },
  { text: `${PROMPT} cat hot-takes.md`, kind: "input" },
  ...runCommand("cat hot-takes.md"),
];

function TerminalMock() {
  const [lines, setLines] = useState<Line[]>(INITIAL);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([INITIAL[0]]);
      return;
    }
    setLines((prev) => [
      ...prev,
      { text: `${PROMPT} ${raw.trim()}`, kind: "input" },
      ...runCommand(raw),
    ]);
  };

  return (
    <div
      className="border-2 border-ink bg-ink text-paper shadow-hard cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-paper/20 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-accent" />
        <span className="h-3 w-3 rounded-full bg-paper/30" />
        <span className="h-3 w-3 rounded-full bg-paper/30" />
        <span className="ml-3 font-mono text-xs text-paper/50">parth · zsh</span>
      </div>
      <div ref={scrollRef} className="h-64 overflow-y-auto p-4 font-mono text-xs sm:text-sm leading-relaxed">
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              line.kind === "input"
                ? "text-paper"
                : line.kind === "accent"
                  ? "text-accent"
                  : "text-paper/70"
            }
          >
            {line.kind === "input" ? (
              <>
                <span className="text-accent">{PROMPT}</span>
                {line.text.slice(PROMPT.length)}
              </>
            ) : (
              line.text
            )}
          </p>
        ))}
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
            setInput("");
          }}
        >
          <span className="shrink-0 text-accent">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent text-paper caret-accent outline-none placeholder:text-paper/30"
            placeholder="type a command…"
            aria-label="Terminal input"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

/** Static terminal frame used as project media for Scout. */
export function ScoutTerminal() {
  return (
    <div className="border-2 border-ink bg-ink text-paper shadow-hard">
      <div className="flex items-center gap-2 border-b border-paper/20 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-accent" />
        <span className="h-3 w-3 rounded-full bg-paper/30" />
        <span className="h-3 w-3 rounded-full bg-paper/30" />
        <span className="ml-3 font-mono text-xs text-paper/50">scout · zsh</span>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed">
        <p>
          <span className="text-accent">$</span> scout "where do we retry failed requests"
        </p>
        <p className="mt-3 text-paper/90">1. src/api/client.rs:142 · retry_with_backoff()</p>
        <p className="text-paper/60">2. src/queue/worker.rs:87 · requeue_on_failure()</p>
        <p className="text-paper/60">3. src/net/http.rs:203 · handle_transient_error()</p>
        <p className="mt-3 text-paper/40">↳ opened src/api/client.rs at line 142 in your editor</p>
        <p className="mt-3">
          <span className="text-accent">$</span> <span className="animate-pulse">▌</span>
        </p>
      </div>
    </div>
  );
}

export default TerminalMock;
