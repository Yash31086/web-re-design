function Header({ logoPreview }) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          {logoPreview ? (
            <img
              src={logoPreview}
              alt="Company logo"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white object-contain p-1 shadow-sm"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-czar-600 text-white shadow-sm shadow-czar-200/60">
              <span className="text-xl font-bold">C</span>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-slate-900">Czar Consultancy</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Labour Law & Compliance</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/services" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Services
          </a>
          <a href="/contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Contact
          </a>
          <a href="/contact" className="rounded-full bg-czar-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-czar-700">
            Enquire Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 rounded-full bg-slate-700"></span>
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-slate-700"></span>
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-slate-700"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
