export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-secondary-500 animate-spin-slow"></div>
      </div>
    </div>
  );
}
