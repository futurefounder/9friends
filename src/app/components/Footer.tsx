const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <span className="font-bold text-purple-300">/</span>
            9FRIENDS by&nbsp;
            <a
              href="https://jessekhala.com/"
              className="underline hover:text-purple-600"
            >
              Jesse Khala
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
