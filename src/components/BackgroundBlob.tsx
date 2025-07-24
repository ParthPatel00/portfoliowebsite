type BlobProps = {
  className?: string;
  color?: string;
};

function BackgroundBlob({ className = "", color }: BlobProps) {
  const gradient = color || "from-blue-500 via-purple-500 to-pink-500";

  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 animate-pulse z-0 ${className} bg-gradient-to-r ${gradient}`}
    />
  );
}

export default BackgroundBlob;
