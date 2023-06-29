import React from "react";

import {Col} from "reactstrap";

import "../../../style/cars_style/footer.css";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
          <Col lg="12">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright{year}, Rental_Car 
                 All rights reserved.
              </p>
          </Col>
    </footer>
  );
};

export default Footer;
