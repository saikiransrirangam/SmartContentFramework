export let WORKFLOWS = {
	1: {
		root: {
			id: 1,
			type: 'trigger',
			data: {
				createTime: 1688991773817,
				webhookUrl: 'https://jsonplaceholder.typicode.com/users',
				title: 'Email touchpoint',
				description: 'Email workflow based off campaign from super bowl',
				webhookMethod: 'get',
				webhookTimeout: '1 min',
				headerName: 'x-api-key',
				headerValue: '9b3gSK0sRR8jOwiO',
				requestBody: 'limt=1',
				httpAuthUsername: 'apiuser',
				httpAuthPassword: '9b3gSK0sRR8jOwiO',
				responseModel: [
					{
						dataType: 'number',
						propertyName: 'id',
					},
					{
						dataType: 'string',
						propertyName: 'username',
					},
					{
						dataType: 'string',
						propertyName: 'email',
					},
					{
						dataType: 'number',
						propertyName: 'age',
					},
					{
						dataType: 'string',
						propertyName: 'address',
					},
					{
						dataType: 'string',
						propertyName: 'city',
					},
					{
						dataType: 'string',
						propertyName: 'state',
					},
					{
						dataType: 'string',
						propertyName: 'zipcode',
					},
					{
						dataType: 'boolean',
						propertyName: 'mortgageInterest',
					},
					{
						dataType: 'boolean',
						propertyName: 'carLoanInterest',
					},
				],
			},
			children: [
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Younger Than 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'lessThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Car loan lending',
								limit: 'Limit Top 3',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
				,
			],
		},
		connectors: [],
	},
	2: {
		root: {
			id: 2,
			type: 'trigger',
			data: {
				createTime: 1688991773817,
				webhookUrl: 'https://jsonplaceholder.typicode.com/users',
				webhookMethod: 'get',
				webhookTimeout: '1 min',
				headerName: 'x-api-key',
				headerValue: '9b3gSK0sRR8jOwiO',
				requestBody: 'limt=1',
				httpAuthUsername: 'apiuser',
				httpAuthPassword: '9b3gSK0sRR8jOwiO',
				title: 'Housing Market',
				description: 'Hosuing loan decisions',
				responseModel: [
					{
						dataType: 'number',
						propertyName: 'id',
					},
					{
						dataType: 'string',
						propertyName: 'username',
					},
					{
						dataType: 'string',
						propertyName: 'email',
					},
					{
						dataType: 'number',
						propertyName: 'age',
					},
					{
						dataType: 'string',
						propertyName: 'address',
					},
					{
						dataType: 'string',
						propertyName: 'city',
					},
					{
						dataType: 'string',
						propertyName: 'state',
					},
					{
						dataType: 'string',
						propertyName: 'zipcode',
					},
					{
						dataType: 'boolean',
						propertyName: 'mortgageInterest',
					},
					{
						dataType: 'boolean',
						propertyName: 'carLoanInterest',
					},
				],
			},
			children: [
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Younger Than 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'lessThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Car loan lending',
								limit: 'Limit Top 3',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Older Than or equal to 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'greaterThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Mortgage loan lending',
								limit: 'Limit Top 5',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
		connectors: [],
	},
	3: {
		root: {
			id: 3,
			type: 'trigger',
			data: {
				createTime: 1688991773817,
				webhookUrl: 'https://jsonplaceholder.typicode.com/users',
				title: 'SMS touchpoint',
				description: 'Email workflow based off campaign from super bowl',

				webhookMethod: 'get',
				webhookTimeout: '1 min',
				headerName: 'x-api-key',
				headerValue: '9b3gSK0sRR8jOwiO',
				requestBody: 'limt=1',
				httpAuthUsername: 'apiuser',
				httpAuthPassword: '9b3gSK0sRR8jOwiO',
				responseModel: [
					{
						dataType: 'number',
						propertyName: 'id',
					},
					{
						dataType: 'string',
						propertyName: 'username',
					},
					{
						dataType: 'string',
						propertyName: 'email',
					},
					{
						dataType: 'number',
						propertyName: 'age',
					},
					{
						dataType: 'string',
						propertyName: 'address',
					},
					{
						dataType: 'string',
						propertyName: 'city',
					},
					{
						dataType: 'string',
						propertyName: 'state',
					},
					{
						dataType: 'string',
						propertyName: 'zipcode',
					},
					{
						dataType: 'boolean',
						propertyName: 'mortgageInterest',
					},
					{
						dataType: 'boolean',
						propertyName: 'carLoanInterest',
					},
				],
			},
			children: [
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Younger Than 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'lessThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Car loan lending',
								limit: 'Limit Top 3',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Older Than or equal to 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'greaterThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Mortgage loan lending',
								limit: 'Limit Top 5',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
		connectors: [],
	},
	4: {
		root: {
			id: 4,
			type: 'trigger',
			data: {
				createTime: 1688991773817,
				webhookUrl: 'https://jsonplaceholder.typicode.com/users',
				title: 'Car Loans',
				description: 'SMS loan decisions',
				webhookMethod: 'get',
				webhookTimeout: '1 min',
				headerName: 'x-api-key',
				headerValue: '9b3gSK0sRR8jOwiO',
				requestBody: 'limt=1',
				httpAuthUsername: 'apiuser',
				httpAuthPassword: '9b3gSK0sRR8jOwiO',
				responseModel: [
					{
						dataType: 'number',
						propertyName: 'id',
					},
					{
						dataType: 'string',
						propertyName: 'username',
					},
					{
						dataType: 'string',
						propertyName: 'email',
					},
					{
						dataType: 'number',
						propertyName: 'age',
					},
					{
						dataType: 'string',
						propertyName: 'address',
					},
					{
						dataType: 'string',
						propertyName: 'city',
					},
					{
						dataType: 'string',
						propertyName: 'state',
					},
					{
						dataType: 'string',
						propertyName: 'zipcode',
					},
					{
						dataType: 'boolean',
						propertyName: 'mortgageInterest',
					},
					{
						dataType: 'boolean',
						propertyName: 'carLoanInterest',
					},
				],
			},
			children: [
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Younger Than 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'lessThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Car loan lending',
								limit: 'Limit Top 3',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
				{
					id: 's1688992123226',
					type: 'conditional',
					data: {
						conditionName: 'Older Than or equal to 25 Years Old',
						conditions: [
							{
								dataAttribute: 'age',
								operator: 'greaterThan',
								value: '25',
								action: 'action',
							},
						],
					},
					children: [
						{
							id: 's1688995054682',
							type: 'action',
							data: {
								createTime: 1688991773817,
								buyerGroups: new Array(3)
									.fill(0)
									.map(() => Math.floor(Math.random() * 10)),
								name: 'Mortgage loan lending',
								limit: 'Limit Top 5',
							},
							children: [
								{
									id: '234324',
									type: 'end',
									data: {},
									children: [],
								},
							],
						},
					],
				},
			],
		},
		connectors: [],
	},
};
