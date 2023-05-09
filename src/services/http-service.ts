import apiClient from "./api-client";

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient // basic QUESTION where is this name defined; return promise
        .get<T[]>(this.endpoint, {
          signal: controller.signal,
        })
        return {request, cancel: () => controller.abort()}
    }

    create<T>(entity: T) {
        return apiClient
         .post(this.endpoint + "/", entity)
    }

    update<T extends Entity>(entity: T) { // basic Question -- is it more readable for these to just be 'user' or is updatedUser better
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }

    delete(id: number) {
        // return a promise
        return apiClient.delete(this.endpoint + "/" + id)
    }


}


const create = (endpoint: string) => new HttpService(endpoint);
export default create;