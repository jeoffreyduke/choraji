import React from "react";
import styles from "../styles/Body.module.css";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { Avatar } from "@mui/material";

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
        </ul>

        <div className={styles.profilePic}>
          <Avatar
            alt={"user.name"}
            sx={{
              height: "40px",
              width: "40px",
            }}
          />
        </div>
      </nav>
      <main className={styles.main}></main>
    </div>
  );
};

export default Body;
