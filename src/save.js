import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		backgroundColour,
		backgroundImage,
		columnOneTitle,
		columnOneContent,
		columnOneImage,
		columnTwoTitle,
		columnTwoContent,
		columnTwoImage,
		columnThreeTitle,
		columnThreeContent,
		columnThreeImage,
		textColour,
		title
	} = attributes;

	console.log(attributes);

	return (
		<div
			style={{
				backgroundColor: backgroundColour,
				backgroundImage: backgroundImage ? `url(${backgroundImage?.url})` : null,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="content">
				{title && (<RichText.Content
					tagName='h2'
					value={title}
				/>)}
				<div className="content-columns">
					{columnOneTitle && (
						<div className="content-column">
							{columnOneImage && (
								<img src={columnOneImage.url} alt="" />
							)}
							{columnOneTitle && (
								<RichText.Content
									tagName='h3'
									value={columnOneTitle}
								/>
							)}
							{columnOneContent && (
								<RichText.Content
									tagName='div'
									className="content-column-content"
									value={columnOneContent}
								/>
							)}
						</div>
					)}
					{columnTwoTitle && (
						<div className="content-column">
							{columnTwoImage && (
								<img src={columnTwoImage.url} alt="" />
							)}
							{columnTwoTitle && (
								<RichText.Content
									tagName='h3'
									value={columnTwoTitle}
								/>
							)}
							{columnTwoContent && (
								<RichText.Content
									tagName='div'
									className="content-column-content"
									value={columnTwoContent}
								/>
							)}
						</div>
					)}
					{columnThreeTitle && (
						<div className="content-column">
							{columnThreeImage && (
								<img src={columnThreeImage.url} alt="" />
							)}
							{columnThreeTitle && (
								<RichText.Content
									tagName='h3'
									value={columnThreeTitle}
								/>
							)}
							{columnThreeContent && (
								<RichText.Content
									tagName='div'
									className="content-column-content"
									value={columnThreeContent}
								/>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}