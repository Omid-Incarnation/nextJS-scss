import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const index = () => (
  <section>
    <Navbar />
    <h1>Hello from Next JS</h1>
    <Link href="/about">
      <a title="about page">Link to "About" page.</a>
    </Link>
  </section>
);

export default index;
