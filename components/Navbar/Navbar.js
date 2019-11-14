import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <React.Fragment>
      <Link href="/">
        <a title="Link One">Link One</a>
      </Link>
      <Link href="/">
        <a title="Link Two">Link Two</a>
      </Link>
      <Link href="/">
        <a title="Link Three">Link Three</a>
      </Link>
    </React.Fragment>
  );
}
