import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.headerCon}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/assets/black-logo.png"
                alt="logo"
                height={window.innerWidth < 768 ? 150 : 20}
                width={window.innerWidth < 768 ? 150 : 100}
              />
            </div>
          </Link>
          <div className={styles.search}>
            <div className={styles.btn}></div>
            <input type="search" name="" id="" placeholder="search" />
          </div>

          <div className={styles.profile}></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
