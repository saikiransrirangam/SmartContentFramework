import { MenuItem } from '../models/menu.model';

export class Menu {
	public static pages: MenuItem[] = [
		{
			group: 'main',
			separator: false,
			items: [
				{
					icon: 'assets/icons/outline/folder.svg',
					label: 'Workflows',
					route: '/secure/dashboard',
				},
				{
					icon: 'assets/icons/outline/gift.svg',
					label: 'Buyers',
					route: '/secure/buyers',
				},
				{
					icon: 'assets/icons/outline/eye.svg',
					label: 'Buyer Groups',
					route: '/secure/groups',
				},
			],
		},
	]
}
