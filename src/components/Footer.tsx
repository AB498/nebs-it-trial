function Footer() {
  return (
    <footer className="relative flex items-center text-white h-24 w-full max-w-2xl md:max-w-none mx-auto">
      <div className="mx-auto px-4 w-full">
        <div className="w-full flex flex-wrap items-center justify-between text-sm">
          <p>© 2024 HomeownersBenifit. All rights reserved</p>
          <ul className="flex items-center space-x-6">
            <li>Terms</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Licence Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;