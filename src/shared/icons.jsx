/* eslint-disable react/display-name */
const withWrapper = (Icon) => (props) =>
  (
    <div className="icon" style={{ display: "flex", placeItems: "center" }}>
      <Icon {...props} />
    </div>
  );

import {
  FaHandsHelping,
  FaSearch,
  FaHandHoldingHeart,
  FaRegEdit,
  FaCode,
  FaUpload,
} from "react-icons/fa";
import { IoIosColorWand, IoMdLogIn } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { RiUserSmileLine } from "react-icons/ri";

export const HelpIco = withWrapper(FaHandsHelping);
export const SearchIco = withWrapper(FaSearch);
export const ThemeIco = withWrapper(IoIosColorWand);
export const LoginIco = withWrapper(IoMdLogIn);
export const HeartIco = withWrapper(FaHandHoldingHeart);
export const GroupsIco = withWrapper(TiGroup);
export const UserIco = withWrapper(RiUserSmileLine);
export const SnippetIco = withWrapper(FaRegEdit);
export const CodeIco = withWrapper(FaCode);
export const UploadIco = withWrapper(FaUpload);
