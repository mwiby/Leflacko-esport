import { Footer } from "../components";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
