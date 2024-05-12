import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer mt-10 py-10 px-10 md:px-24 bg-darken">
        <nav className="space-y-3 text-[16px]">
          <h1>
            Questions? Call {"  "}
            <a
              href="tel:000-800-919-1694"
              className="hover:underline text-cyan"
            >
              000-800-919-1694
            </a>
          </h1>
          <a className="underline" href="https://help.netflix.com/support/412">
            FAQ
          </a>
          <a className="underline" href="Cookie Preferences">
            Cookie Preferences
          </a>
        </nav>
        <nav className="space-y-3 text-[16px]">
          <a className="link link-hover" href="https://help.netflix.com/">
            Help Centre
          </a>
          <a
            className="link link-hover"
            href="https://help.netflix.com/legal/corpinfo"
          >
            Corporate Information
          </a>
        </nav>
        <nav className="space-y-3 text-[16px]">
          <a
            href="https://help.netflix.com/legal/termsofuse"
            className="link link-hover"
          >
            Terms of use
          </a>
        </nav>
        <nav className="space-y-3 text-[16px]">
          <a
            href="https://help.netflix.com/legal/privacy"
            className="link link-hover"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
