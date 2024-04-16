import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 mt-0 text-center grid justify-items-center w-full text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-center">
      <div className="mx-6 xl:mx-28 py-10 xl:text-start md:text-left ">
        <div className="grid-1 grid gap-2 md:grid-cols-2 grid-cols-2 items-center lg:grid-cols-5 lg:justify-items-center justify-items-start text-start">
          <div className="text-start">
            <h6 className="mb-4 text-[32px] text-[#3b5d50] flex items-center justify-center font-semibold md:justify-start">
              Furni .
            </h6>
            <p className="text-[14px]">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-[14px]">
            <p className="mb-4 flex justify-center font-medium md:justify-start">
              About us
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Services</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Blog</a>
            </p>

            <p className="text-neutral-600 dark:text-neutral-200">Contact us</p>
          </div>
          <div className="text-[14px] text-start">
            <p className="mb-4 flex lg:justify-start lg:text-start text-start font-medium md:justify-start">
              Support
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Knowledge base
              </a>
            </p>
            <a className="text-neutral-600 dark:text-neutral-200">Live Chat</a>
          </div>
          <div className="text-[14px]">
            <h6 className="mb-4 flex lg:justify-start text-start font-medium md:justify-start">
              Jobs
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">Our team</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Leader ship
              </a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200">
                Preavacy Policy
              </a>
            </p>
          </div>

          <div className="text-[14px] text-start ">
            <h6 className="mb-4 flex justify-center font-medium md:justify-start">
              Nordic Chair
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Kruzo Aero
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Ergonomic Chair
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around xl:px-28 w-full border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block text-[14px]">
          <p class="mb-2 text-center text-lg-start">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>2024. All
            Rights Reserved. — Designed with love by{" "}
            <a href="https://untree.co">Untree.co</a> Distributed By{" "}
            <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>

        <div className="flex justify-center text-[14px]">
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            Terms & Conditions
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
