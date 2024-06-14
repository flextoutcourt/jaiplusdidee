import { useContext } from "react";
import PusherContext from "../context/PusherContext";

const usePusher = () => useContext(PusherContext);

export default usePusher;