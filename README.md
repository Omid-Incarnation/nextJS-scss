###### STEP 01

```github
git init
```

```npm
npm init -y
```

```npm
npm i react react-dom next
```

###### STEP 02

![STEP 02](/img/01.jpg)

###### STEP 03

#### How to add a page in Next JS

![STEP 03](/img/02_how_to_add_a_page.jpg)

#### This is the way to style a component.

```javascript
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
      <style jsx>{`
        a {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}
```

#### and This is the way which we can do it globally.

```javascript
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const index = () => (
  <section>
    <Navbar />
    <h1>Hello from Next JS</h1>
    <Link href="/about">
      <a title="about page">Link to "About" page.</a>
    </Link>
    <style jsx global>{`
      a {
        color: red;
      }
    `}</style>
  </section>
);

export default index;
```

###### STEP 04

![STEP 02](/img/03.jpg)
