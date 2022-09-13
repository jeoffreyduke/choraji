import React from "react";
import styles from "../styles/Body.module.css";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { Avatar } from "@mui/material";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

const Body = () => {
  return (
    <div className={styles.Body}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <CottageRoundedIcon sx={{ width: 23, height: 23 }} />
          </li>
          <li>
            <ScienceRoundedIcon sx={{ width: 23, height: 23 }} />
          </li>
          <li>
            <Groups2RoundedIcon sx={{ width: 23, height: 23 }} />
          </li>
          <li>
            <ShoppingCartRoundedIcon sx={{ width: 23, height: 23 }} />
          </li>
          <li>
            <BookmarkRoundedIcon sx={{ width: 23, height: 23 }} />
          </li>
          <div className={styles.divider} />
        </ul>

        <div className={styles.create}>
          <DriveFileRenameOutlineRoundedIcon sx={{ width: 28, height: 28 }} />
        </div>
      </nav>
      <main className={styles.main}></main>
    </div>
  );
};

export default Body;
