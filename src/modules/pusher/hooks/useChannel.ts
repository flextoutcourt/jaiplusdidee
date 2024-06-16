import { useContext } from "react";
import ChannelContext from "../context/ChannelContext";

const useChannel = () => useContext(ChannelContext);

export default useChannel;