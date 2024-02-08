// import { profileType} from './../redux/profile-person-reducer';
import { UsersType } from './../redux/users-reducer';

import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "ad7ced2a-34d4-4722-b361-388a9f8b590f"
    }
})
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
type GetUsersType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
type PostFollowerType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type DeleteFollowerType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        return await instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    async postFollower(u: number) {
        const res = await instance.post<PostFollowerType>(`follow/${u}`);
        console.log(res)
        return res.data;

    },
    async deleteFollower(u: number) {
        const res = await instance.delete<DeleteFollowerType>(`follow/${u}`);
        return res.data;
    },

}
export const profileAPI = {
    async profileUserId(id: number) {
        const res = await instance.get(`profile/` + id);
        return res.data;
    },
    async myProfileData() {
        const res = await instance.get(`auth/me`);
        return res.data.data;
    },
    async getStatus(userId: number) {
        const res = await instance.get(`profile/status/${userId}`);
        return res.data;
    },
    async updateStatus(status: string | null) {
        const res = await instance.put(`profile/status`, { status: status });
        return res.data;

    },
    async savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
export const authAPI = {
    async checkLogin() {
        const res = await instance.get(`auth/me`);
        return res.data;
    },
    async login(email, password, rememberMe = false, captcha = null) {
        const res = await instance.post(`auth/login`, { email, password, rememberMe, captcha });
        return res.data;
    },
    async logout() {
        const res = await instance.delete(`auth/login`);
        return res.data;
    }
}
export const securityAPI = {
    async getCaptchaApi() {
        const res = await instance.get(`/security/get-captcha-url`);
        return res.data;
    }
}
