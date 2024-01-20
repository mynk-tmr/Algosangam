import { ArrowRight, HelpIco, SearchIco, ThemeIco } from "../shared/icons";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.paint}>
      <a>LOGO</a>
      <search>
        <SearchIco />
        <input type="search" />
        <ArrowRight />
      </search>
      <nav>
        <a>
          <HelpIco /> Get Help
        </a>
        <a>
          <ThemeIco /> Switch Theme
        </a>
      </nav>
    </header>
  );
}
