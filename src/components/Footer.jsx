export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-5 sm:px-6 mx-auto max-w-7xl pt-6 pb-7 mt-16 border-t border-white/14">
      <div>
        <strong>Prism</strong>
        <p className="mt-1.5 text-muted leading-relaxed">
          Shared expenses, made clear.
        </p>
      </div>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-accent-2 font-black no-underline hover:underline"
      >
        Back to top
      </a>
    </footer>
  );
}
