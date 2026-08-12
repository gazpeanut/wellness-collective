export default function Header() {
  return (
    <header className="border-b border-[#E4D9CF] bg-[#F8F6F3]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-xl">
          The Wellness Collective
        </a>

        <nav className="hidden gap-6 text-sm text-stone-600 sm:flex">
          <a href="/" className="hover:text-[#6B7A6B]">
            Home
          </a>

          <a href="/wellness" className="hover:text-[#6B7A6B]">
            Wellness
          </a>

          <a href="/book" className="hover:text-[#6B7A6B]">
            Book
          </a>

          <a href="/account" className="hover:text-[#6B7A6B]">
            My Account
          </a>
        </nav>
      </div>
    </header>
  );
}