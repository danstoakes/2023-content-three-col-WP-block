import { __ } from '@wordpress/i18n';

import { 
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
	RichText
} from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ToggleControl,
	ExternalLink
} from '@wordpress/components';

import './editor.scss';

export default function Edit ({ attributes, setAttributes }) {
	const { 
		content,
		backgroundColour,
		backgroundImage,
		textColour,
		title
	} = attributes;

	const onChangeBackgroundColour = (newBackgroundColour) => {
		setAttributes({ backgroundColour: newBackgroundColour });
	}

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	}

	const onChangeTextColour = (newTextColour) => {
		setAttributes({ textColour: newTextColour });
	}

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	}

	return (
		<div 
			{ ...useBlockProps() }
			style={{
				backgroundImage: backgroundImage,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<InspectorControls>
				<PanelColorSettings 
					title={ __('Colour settings', 'danstoakes-content-three-col')}
					initialOpen={ false }
					colorSettings={[
						{
						  value: textColour,
						  onChange: onChangeTextColour,
						  label: __('Text colour', 'danstoakes-content-three-col')
						},
						{
						  value: backgroundColour,
						  onChange: onChangeBackgroundColour,
						  label: __('Background colour', 'danstoakes-content-three-col')
						}
					]}
				/>
			</InspectorControls>
			<RichText
				tagName='h2'
				value={ title }
				onChange={ onChangeTitle }
				placeholder={__('Enter title...', 'danstoakes-content-three-col')}
            />
			<RichText
				tagName='p'
				onChange={ onChangeContent }
				allowedFormats={[ 'core/bold', 'core/italic' ]}
				value={ content }
				placeholder={ __( 'Write your text...' ) }
				style={{ color: textColour }}
			/>
		</div>
	);
}
