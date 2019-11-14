import Link from "next/link";

const index = () => (
  <section>
    <h1>Hello from Next JS</h1>
    <Link href="/about">
      <a title="about page">Link to "About" page.</a>
    </Link>
  </section>
);

export default index;
