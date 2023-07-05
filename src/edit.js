import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	PanelRow
} from '@wordpress/components';

import './editor.scss';

import ContentColumn from './lib/content-column';

export default function Edit({ attributes, setAttributes }) {
	const {
		columnOneTitle,
		columnOneContent,
		columnOneImage,
		columnTwoTitle,
		columnTwoContent,
		columnTwoImage,
		columnThreeTitle,
		columnThreeContent,
		columnThreeImage,
		backgroundColour,
		backgroundImage,
		textColour,
		title
	} = attributes;

	const onChangeBackgroundColour = (backgroundColour) => {
		setAttributes({ backgroundColour: backgroundColour });
	}

	const onChangeTextColour = (textColour) => {
		setAttributes({ textColour: textColour });
	}

	const onChangeTitle = (title) => {
		setAttributes({ title: title });
	}

	return (
		<div
			{...useBlockProps()}
			style={{
				backgroundImage: backgroundImage,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<InspectorControls>
				<PanelColorSettings
					title={__('Colour settings', 'danstoakes-content-three-col')}
					initialOpen={false}
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
				<PanelBody
					title={ __( 'Background image', 'danstoakes-content-three-col' )}
					initialOpen={true}
				>
					<PanelRow>
						<fieldset>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(backgroundImage) => setAttributes({ backgroundImage: backgroundImage })}
									allowedTypes={['image']}
									value={backgroundImage}
									render={({ open }) => (
										<>
											{backgroundImage ? (
												<img src={backgroundImage.url} alt="" style={{ maxWidth: '100%', marginBottom: '10px' }} />
											) : null}
											<Button onClick={open}>{__('Select Image', 'danstoakes-content-three-col')}</Button>
										</>
									)}
								/>
							</MediaUploadCheck>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div class="content">
				<RichText
					tagName='h2'
					value={title}
					onChange={onChangeTitle}
					placeholder={__('Enter title...', 'danstoakes-content-three-col')}
				/>
				<div class="content-columns">
					<ContentColumn
						title={columnOneTitle}
						onChangeTitle={(title) => setAttributes({ columnOneTitle: title })}
						content={columnOneContent}
						onChangeContent={(content) => setAttributes({ columnOneContent: content })}
						image={columnOneImage}
						onChangeImage={(image) => setAttributes({ columnOneImage: image })}
					/>
					<ContentColumn
						title={columnTwoTitle}
						onChangeTitle={(title) => setAttributes({ columnTwoTitle: title })}
						content={columnTwoContent}
						onChangeContent={(content) => setAttributes({ columnTwoContent: content })}
						image={columnTwoImage}
						onChangeImage={(image) => setAttributes({ columnTwoImage: image })}
					/>
					<ContentColumn
						title={columnThreeTitle}
						onChangeTitle={(title) => setAttributes({ columnThreeTitle: title })}
						content={columnThreeContent}
						onChangeContent={(content) => setAttributes({ columnThreeContent: content })}
						image={columnThreeImage}
						onChangeImage={(image) => setAttributes({ columnThreeImage: image })}
					/>
				</div>
			</div>
		</div>
	);
}