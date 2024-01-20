/* eslint-disable react/display-name */
const withWrapper = (Icon) => (props) =>
  (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon {...props} />
    </div>
  );

import { FaHandsHelping, FaSearch, FaArrowRight } from "react-icons/fa";
import { IoIosColorWand } from "react-icons/io";

export const HelpIco = withWrapper(FaHandsHelping);
export const SearchIco = withWrapper(FaSearch);
export const ThemeIco = withWrapper(IoIosColorWand);
export const ArrowRight = withWrapper(FaArrowRight);
