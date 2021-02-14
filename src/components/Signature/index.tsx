import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../config/theme";

const { colors } = theme;

const Footer = styled.div`
  text-align:center;
  width: 100%auto;
  font-size:1em;
  font-weight: bold;
  a {
    color: ${colors.textdark};
    text-decoration: none;
  }
`;

const Signature = () => (
  <Footer>
    <Link href="http://www.fior.in">
        by Fior.in
    </Link>
  </Footer>
)

export default Signature 