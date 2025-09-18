
export default function Footer({ title }: { title: string }) {
  return (
    <footer className="w-full py-4 px-6 text-center">
      <p className="italic pb-4">
        “Art washes away from the soul the dust of everyday life. – Picasso”
      </p>
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {title} - All rights reserved
      </p>
    </footer>
  );
}
