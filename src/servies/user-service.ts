import apiClient from "./api-client";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
export type TUser = {
    id: number;
    name: string;
    // only define properties interested in
  };

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient // basic QUESTION where is this name defined; return promise
        .get<TUser[]>("/users", {
          signal: controller.signal,
        })
        return {request, cancel: () => controller.abort()}
    }

    addUser = (user: TUser) => {
        return apiClient
         .post("/users/", user)
    }

    updateUser = (user: TUser) => { // basic Question -- is it more readable for these to just be 'user' or is updatedUser better
        return apiClient.patch("/users/" + user.id, user)
    }

    deleteUser = (id: number) => {
        // return a promise
        return apiClient.delete("/users/" + id)
    }


}


export default new UserService();