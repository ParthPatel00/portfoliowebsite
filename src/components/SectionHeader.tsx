function SectionHeader({ text }: { text: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
        {text}
      </h2>
      <div className="mt-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded" />
    </div>
  );
}

export default SectionHeader;
