import create from "./http-service";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
export type TUser = {
    id: number;
    name: string;
    // only define properties interested in
  };

export default create("/users");