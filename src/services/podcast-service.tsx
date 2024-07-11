import axiosInstance from '../config/axios/axios-config'

export const getPodcasts = (uri:string) => {
    const res = axiosInstance.get(uri)
    return res
}