import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="https://github.com/kdb0074">About</a>
          <a href="https://github.com/kdb0074">Store locator</a>
          <a href="https://github.com/kdb0074">FAQs</a>
          <a href="https://github.com/kdb0074">News</a>
          <a href="https://github.com/kdb0074">Careers</a>
          <a href="https://github.com/kdb0074">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/kdb0074"
          >
            &nbsp; Kaustubh
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
