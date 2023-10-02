import httpClient from "../environment/environment";

interface Worker {
    name: string
    lastName: string
    email: string
    password: string
    phone: string
    address: string
    profile_pic: FileList
}

export const registerWorker = async (worker: Worker) => {
    console.log('asa')
    try {
        console.log('asamito')
        const { data } = await httpClient.post('http://localhost:3000/mande/worker/add', worker);
        console.log('data', data)
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
