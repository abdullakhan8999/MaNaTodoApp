import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex px-3 bg-dark text-light align-content-center justify-content-center justify-content-around pt-3">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <Link
            
            className="text-light text-capitalize footer_a"
            to="#"
          >
            twitter
            <img
              src="https://img.icons8.com/color/2x/twitter--v3.png"
              className="bi"
              width="24"
              height="24"
              alt="twitter"
            />
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-light text-capitalize footer_a" to="#">
            instagram
            <img
              src="https://img.icons8.com/color/512/instagram-new.png"
              className="bi"
              width="24"
              height="24"
              alt="instagram"
            />
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-light text-capitalize footer_a" to="#">
            facebook
            <img
              src="https://img.icons8.com/color/2x/facebook.png"
              className="bi"
              width="24"
              height="24"
              alt="facebook"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
