import axios from 'axios';

import { BASE_URL } from '@zeta/shared/constants/Index';

import { handleError, handleResponse } from './Response';

const appAxios = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

appAxios.interceptors.response.use(
	res => res,
	async err => {
		if (err?.status === 401) {
			return;
		}
		if (err?.status === 403) {
			return;
		}

		return Promise.reject(err);
	}
);

/*
 **-------------------------------------------------------------------------------------
 ** FN NAME - getToken
 **-------------------------------------------------------------------------------------
 */
const getHeaders = () => {
	const headers = {};
	return {
		headers: { ...headers },
	};
};
/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - getAll
 **-------------------------------------------------------------------------------------
 */
const get = (resource: string, sendHeaders: boolean = true): Promise<any> => {
	return appAxios
		.get(`${BASE_URL}/${resource}`, sendHeaders ? getHeaders() : {})
		.then(handleResponse)
		.catch(handleError);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - getAll
 **-------------------------------------------------------------------------------------
 */
const getRaw = (resource: string): Promise<any> => {
	return appAxios
		.get(`${BASE_URL}/${resource}`, getHeaders())
		.then(handleResponse)
		.catch(handleError);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - getAll
 **-------------------------------------------------------------------------------------
 */
const getAll = (resource: string): Promise<any> => {
	return appAxios
		.get(`${BASE_URL}/${resource}`, getHeaders())
		.then(handleResponse)
		.catch(handleError);
};
/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - getSingle
 **-------------------------------------------------------------------------------------
 */
const getSingle = (resource: string, id: any) => {
	return appAxios
		.get(`${BASE_URL}/${resource}/${id}`, getHeaders())
		.then(handleResponse)
		.catch(handleError);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - post
 **-------------------------------------------------------------------------------------
 */
const post = (resource: string, model: any) => {
	return appAxios.post(`${BASE_URL}/${resource}`, model, getHeaders()).then(handleResponse);
};
/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - post
 **-------------------------------------------------------------------------------------
 */
const postRaw = (resource: string, model: any) => {
	return appAxios.post(`${BASE_URL}/${resource}`, model, getHeaders());
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - post
 **-------------------------------------------------------------------------------------
 */
const patchRaw = (resource: string, model: any) => {
	return appAxios.patch(`${BASE_URL}/${resource}`, model, getHeaders());
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - post
 **-------------------------------------------------------------------------------------
 */
const deleteRaw = (resource: string) => {
	return appAxios.delete(`${BASE_URL}/${resource}`, getHeaders());
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - postFile
 **-------------------------------------------------------------------------------------
 */
const postFile = (resource: string, file: any) => {
	const headers = getHeaders();
	const data: FormData = new FormData();
	data.append('file', file);
	return appAxios
		.post(`${BASE_URL}/${resource}`, data, {
			headers: {
				...headers.headers,
				'Content-Type': 'multipart/form-data',
			},
		})
		.then(handleResponse);
};
/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - get
 **-------------------------------------------------------------------------------------
 */
const put = (resource: string, model: any) => {
	return appAxios
		.put(`${BASE_URL}/${resource}`, model, getHeaders())
		.then(handleResponse)
		.catch(handleError);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - patch
 **-------------------------------------------------------------------------------------
 */
const patch = (resource: string, model: any, sendHeaders: boolean = true) => {
	return appAxios
		.patch(`${BASE_URL}/${resource}`, model, sendHeaders ? getHeaders() : {})
		.then(handleResponse);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - remove
 **-------------------------------------------------------------------------------------
 */
const remove = (resource: string, id: number) => {
	return appAxios
		.delete(`${BASE_URL}/${resource}/${id}`, getHeaders())
		.then(handleResponse)
		.catch(handleError);
};

/*
 **-------------------------------------------------------------------------------------
 ** METHOD NAME - delete
 **-------------------------------------------------------------------------------------
 */
const deleteRecord = (resource: string) => {
	return appAxios.delete(`${BASE_URL}/${resource}`, getHeaders()).then(handleResponse);
};

export const apiProvider = {
	getAll,
	getSingle,
	post,
	put,
	patch,
	remove,
	getHeaders,
	postFile,
	get,
	deleteRecord,
	postRaw,
	patchRaw,
	deleteRaw,
};
