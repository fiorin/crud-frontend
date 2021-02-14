import React from "react";
import { FaHome, FaMailchimp, FaPowerOff, FaShoppingBag, FaTasks, FaUserClock } from 'react-icons/fa';
import Link from "next/link";
import { MenuIconItem, MenuIconsList } from "./style";

const BarIcons = () => (
  <MenuIconsList>
    <MenuIconItem>
      <Link href="/">
        <FaHome/>
      </Link>
    </MenuIconItem>
    <MenuIconItem className="disabled">
      <FaTasks/>
    </MenuIconItem>
    <MenuIconItem className="disabled">
      <FaShoppingBag/>
    </MenuIconItem>
    <MenuIconItem className="disabled">
      <FaPowerOff/>
    </MenuIconItem>
  </MenuIconsList>
)

export default BarIcons 