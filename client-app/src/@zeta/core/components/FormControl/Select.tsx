import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

const errorClasses = 'text-red-900 focus:ring-red-500 ring-red-300  placeholder:text-red-300 pr-7';
interface TextFieldProps {
	value: string;
	label: string;
	list: any[];
	onChange: (e) => void;
	onFocus?: (e) => void;
	onBlur?: (e) => void;
	placeholder?: string;
	autoFocus?: boolean;
	name?: string;
	type?: 'email' | 'password' | 'text' | 'number' | 'date' | 'textarea' | 'phone';
	textarea?: boolean;
	error?: string;
	forwardedRef?: any;
	className?: string;
	readonly?: boolean;
	keyUp?: (e) => void;
	width?: 'w-full';
	disabled?: boolean;
	max?: string;
	maxlength?: number;
	inputClasses?: string;
	showMask?: boolean;
	mask?: string;
	pattern?: string;
}

const noop = e => {};

export default function SelectControl({
	label,
	list,
	type = 'text',
	className,
	onChange,
	value,
	error = '',
	placeholder = '',
	name,
	...rest
}: TextFieldProps) {
	return (
		<div className={`my-0 relative ${className}`}>
			<label
				htmlFor={`${name}-control`}
				className="block text-base font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div
				className={`block w-full mt-0.5 rounded-lg border border-gray-700 p-3 pb-3 pr-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus-within:outline-none focus-within:border-0 sm:text-sm sm:leading-6 ${
					error.length && errorClasses
				}`}
			>
				<select
					name={name}
					id={`${name}-control`}
					onChange={e => {
						onChange(e);
					}}
					onFocus={(e: any) => {
						if (rest.onFocus) rest.onFocus(e);
					}}
					onBlur={(e: any) => {
						if (rest.onBlur) rest.onBlur(e);
					}}
					className="w-full border-0  outline-none focus-within:outline-none focus-within:border-0"
					value={value}
				>
					<option>Select</option>
					{list.map((item, idx) => (
						<option key={`${idx}-select-${name}`} value={item.value}>
							{item.label}
						</option>
					))}
				</select>
				{error.length > 0 && (
					<div className="pointer-events-none absolute inset-y-0 right-0 -bottom-6 flex items-center pr-3">
						<ExclamationCircleIcon
							className="h-5 w-5 text-red-500"
							aria-hidden="true"
						/>
					</div>
				)}
				<div className="signupselect ml-2" />
			</div>
			{error.length > 0 && (
				<p className="mt-0.5 text-sm text-red-600 text-label absolute -bottom-5">
					{error.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/gi, ' ')}
				</p>
			)}
		</div>
	);
}
