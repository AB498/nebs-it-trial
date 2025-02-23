function Footer() {
  return (
    <footer className="relative flex items-center text-white h-24 w-full max-w-2xl md:max-w-none mx-auto">
      <div className="mx-auto w-full text-xs">
        <div className="w-full flex flex-wrap items-center justify-between text-sm">
          <p>© 2024 HomeownersBenifit. All rights reserved</p>
          <ul className="flex items-center space-x-3">
            <li className="line-clamp-1">Terms</li>
            <li className="line-clamp-1">|</li>
            <li className="line-clamp-1">Privacy Policy</li>
            <li className="line-clamp-1">|</li>
            <li className="line-clamp-1">Licence Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;