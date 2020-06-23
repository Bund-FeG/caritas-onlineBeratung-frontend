import * as React from 'react';

export interface CheckboxItem {
	inputId: string;
	name: string;
	labelId: string;
	label: string;
	checked: boolean;
}

export const Checkbox = (props) => {
	const checkboxItem = props.item;
	return (
		<div className="checkbox__wrapper formWrapper__inputRow">
			<input
				onClick={(e) => props.checkboxHandle(e)}
				id={checkboxItem.inputId}
				className="checkbox__input"
				type="checkbox"
				name={checkboxItem.name}
				defaultChecked={checkboxItem.checked}
			/>
			<label
				id={checkboxItem.labelId}
				className="checkbox__label"
				htmlFor={checkboxItem.inputId}
			>
				{checkboxItem.label}
			</label>
		</div>
	);
};
