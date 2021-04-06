import * as React from 'react';
import './headline.styles';

export type HeadlineLevels = '1' | '2' | '3' | '4' | '5';
interface HeadlineProps {
	semanticLevel: HeadlineLevels;
	styleLevel?: HeadlineLevels;
	text: string;
	className?: string;
}

export const Headline = (props: HeadlineProps) => {
	const Tag = ('h' + props.semanticLevel) as keyof JSX.IntrinsicElements;
	const levelBasedClass = props.styleLevel
		? props.styleLevel
		: props.semanticLevel;

	return (
		<Tag
			className={`headline headline--${levelBasedClass} ${
				props.className ? props.className : ''
			}`}
			dangerouslySetInnerHTML={{
				__html: props.text
			}}
		></Tag>
	);
};
