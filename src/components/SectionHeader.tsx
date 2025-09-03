function SectionHeader({ text }: { text: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{text}</h2>
      <div className="mt-2 h-1 w-16 bg-emerald-400 mx-auto rounded" />
    </div>
  );
}

export default SectionHeader;
