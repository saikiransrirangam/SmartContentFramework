import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WorkflowDataService {
	private serviceUrl = environment.workflowApiDomain;
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor(private readonly http: HttpClient) {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - seed
	 **-------------------------------------------------------------------------------------
	 */
	public seed(): void {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - get
	 **-------------------------------------------------------------------------------------
	 */
	public list(key): any {
		const url = `${this.serviceUrl}/api/1/getWorkFlowJson`;
		return this.http.get(url);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - get
	 **-------------------------------------------------------------------------------------
	 */
	public get(id: number): any {
		const url = `${this.serviceUrl}/api/1/getWorkFlowJson/${id}`;
		return this.http.get(url);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - set
	 **-------------------------------------------------------------------------------------
	 */
	public create(payload): any {
		const url = `${this.serviceUrl}/api/1/getWorkFlowJson`;
		return this.http.post(url, { ...payload });
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - set
	 **-------------------------------------------------------------------------------------
	 */
	public update(id, payload) {
		const url = `${this.serviceUrl}/api/1/getWorkFlowJson/${id}`;
		return this.http.post(url, { ...payload });
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - delete
	 **-------------------------------------------------------------------------------------
	 */
	public delete() {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - clear
	 **-------------------------------------------------------------------------------------
	 */
	public clear(): void {}
}
