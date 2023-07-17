import { Injectable } from '@angular/core';

import { BUYER_GROUPS, BUYERS, WORKFLOWS } from '../database';
import { WORKFLOW_LIST } from '../database/workflows-list';

@Injectable({ providedIn: 'root' })
export class DataService {
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - constructor
	 **-------------------------------------------------------------------------------------
	 */
	constructor() {}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - seed
	 **-------------------------------------------------------------------------------------
	 */
	public seed(): void {
		if (this.exists('seeded')) return;
		this.set('workflows', WORKFLOWS);
		this.set('buyers', BUYERS);
		this.set('buyerGroups', BUYER_GROUPS);
		this.set('workflowList', WORKFLOW_LIST);
		this.set('seeded', []);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - get
	 **-------------------------------------------------------------------------------------
	 */
	public get(key): any {
		const value = sessionStorage.getItem(key);
		try {
			return JSON.parse(value);
		} catch (e) {
			return value;
		}
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - getById
	 **-------------------------------------------------------------------------------------
	 */
	public getById(key, id): any {
		const values = this.get(key);
		return values[id];
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - setById
	 **-------------------------------------------------------------------------------------
	 */
	public setById(key, id, value) {
		const values = this.get(key);
		values[id] = value;
		this.set(key, values);
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - exists
	 **-------------------------------------------------------------------------------------
	 */
	public exists(key): boolean {
		const item = this.get(key);
		return item ? true : false;
	}
	/*
	 **-------------------------------------------------------------------------------------
	 ** METHOD NAME - set
	 **-------------------------------------------------------------------------------------
	 */
	public set(key, value): void {
		sessionStorage.setItem(key, JSON.stringify(value));
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
