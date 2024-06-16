import {atomWithStorage} from "jotai/utils";
import { Agent } from "../types/AuthType";

const authAtom = atomWithStorage<Agent>('user', undefined as any);

export default authAtom;

