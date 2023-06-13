import { apiProvider } from './Provider';

const serialize = obj => {
	var str: any[] = [];
	for (let p in obj)
		if (obj.hasOwnProperty(p)) {
			str.push(p + '=' + obj[p]);
		}
	return str.join('&');
};

export interface iApiCore {
	getAll: (config?: any) => Promise<any>;
	getSingle: (id: any) => Promise<any>;
	post: (model: any, path?: any) => Promise<any>;
	put: (model: any) => Promise<any>;
	patch: (model: any, path?: any, sendHeaders?: boolean) => Promise<any>;
	remove: (id: number) => Promise<any>;
	postFile: (model: any, path?: any) => Promise<any>;
	postFileRaw: (model: any, path?: any) => Promise<any>;
	get: (path?: any, sendHeaders?: boolean) => Promise<any>;
	delete: (path: any) => Promise<any>;
	deleteRaw: (path: any) => Promise<any>;
	getRaw: (path: any, config?: any) => Promise<any>;
	postRaw: (model: any, path: any) => Promise<any>;
	patchRaw: (model: any, path: any) => Promise<any>;
}
export class ApiCore implements iApiCore {
	public getAll: (config?: any) => Promise<any>;
	public getSingle: (id: any) => Promise<any>;
	public post: (model: any, path?: any) => Promise<any>;
	public postFile: (model: any, path?: any) => Promise<any>;
	public postFileRaw: (model: any, path?: any) => Promise<any>;
	public put: (model: any) => Promise<any>;
	public patch: (model: any, path?: any, sendHeaders?: boolean) => Promise<any>;
	public remove: (id: number) => Promise<any>;
	public get: (path?: string) => Promise<any>;
	public delete: (path: string) => Promise<any>;
	public deleteRaw: (path: string) => Promise<any>;
	public getRaw: (path: string, config?: any) => Promise<any>;
	public postRaw: (model: any, path: string) => Promise<any>;
	public patchRaw: (model: any, path: string) => Promise<any>;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(options: any) {
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - getAll
		 **-------------------------------------------------------------------------------------
		 */
		this.getAll = (config = { queryParams: '' }): Promise<any> => {
			return apiProvider.getAll(
				`${options.url}?${serialize(config?.queryParams).replace('?', '')}`
			);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - getAll
		 **-------------------------------------------------------------------------------------
		 */

		this.get = (path: string = '', sendHeaders: boolean = true) => {
			return apiProvider.get(options.url + path, sendHeaders);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - getAll
		 **-------------------------------------------------------------------------------------
		 */

		this.getRaw = (path: string = '', config = {}) => {
			return apiProvider.get(`${path}?${serialize(config?.queryParams)}`);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - postRaw
		 **-------------------------------------------------------------------------------------
		 */

		this.postRaw = (model: any, path: any = '') => {
			return apiProvider.postRaw(`${path}`, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - postRaw
		 **-------------------------------------------------------------------------------------
		 */

		this.patchRaw = (model: any, path: any = '') => {
			return apiProvider.patchRaw(`${path}`, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - postRaw
		 **-------------------------------------------------------------------------------------
		 */

		this.deleteRaw = (path: any = '') => {
			return apiProvider.deleteRaw(`${path}`);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - getSingle
		 **-------------------------------------------------------------------------------------
		 */
		this.getSingle = (id: any): Promise<any> => {
			return apiProvider.getSingle(options.url, id);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - post
		 **-------------------------------------------------------------------------------------
		 */
		this.post = (model: any, path: any = ''): Promise<any> => {
			return apiProvider.post(options.url + path, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - post
		 **-------------------------------------------------------------------------------------
		 */
		this.postFile = (path: any = '', model: any): Promise<any> => {
			return apiProvider.postFile(options.url + path, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - post
		 **-------------------------------------------------------------------------------------
		 */
		this.postFileRaw = (path: any = '', model: any): Promise<any> => {
			return apiProvider.postFile(path, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - put
		 **-------------------------------------------------------------------------------------
		 */
		this.put = (model: any): Promise<any> => {
			return apiProvider.put(options.url, model);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - patch
		 **-------------------------------------------------------------------------------------
		 */
		this.patch = (model: any, path: any = '', sendHeaders: boolean = true): Promise<any> => {
			console.log(model, path, sendHeaders);
			return apiProvider.patch(options.url + path, model, sendHeaders);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - remove
		 **-------------------------------------------------------------------------------------
		 */
		this.remove = (id: any): Promise<any> => {
			return apiProvider.remove(options.url, id);
		};
		/*
		 **-------------------------------------------------------------------------------------
		 ** METHOD NAME - delete
		 **-------------------------------------------------------------------------------------
		 */

		this.delete = (path: string = '') => {
			return apiProvider.deleteRecord(options.url + path);
		};
	}
}
