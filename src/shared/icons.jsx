/* eslint-disable react/display-name */
const withWrapper = (Icon) => (props) =>
  (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon {...props} />
    </div>
  );

import { FaHandsHelping, FaSearch, FaHandHoldingHeart } from "react-icons/fa";
import { IoIosColorWand, IoMdLogIn } from "react-icons/io";
import { TiGroup } from "react-icons/ti";

export const HelpIco = withWrapper(FaHandsHelping);
export const SearchIco = withWrapper(FaSearch);
export const ThemeIco = withWrapper(IoIosColorWand);
export const LoginIco = withWrapper(IoMdLogIn);
export const HeartIco = withWrapper(FaHandHoldingHeart);
export const GroupsIco = withWrapper(TiGroup);
