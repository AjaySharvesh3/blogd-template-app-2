import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <>
      <div className=" py-4 border bg-white mt-auto w-full shadow-md">
          <span class="block text-sm text-gray-500 sm:text-center py-1 text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Captions AI
            </a>
            . All Rights Reserved.
          </span>
      </div>
    </>
  );
};

export default Footer;
