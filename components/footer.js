import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky text-sm left-0 right-0 bottom-0 block md:flex justify-between items-center bg-gray-100 dark:bg-gray-700 dark:bg-opacity-20 text-gray-900 dark:text-gray-100 px-4 py-3 text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link target="_blank" href="https://github.com/redarashid">
          Your Partner in Digital Growth
        </Link>
      </p>
      <p className="mt-2 text-sm">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/rashid-reda-4048a5314/"}>
          Rashid Reda
        </Link>
      </p>
    </footer>
  );
}
