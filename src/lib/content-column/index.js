import {
    MediaUpload,
    MediaUploadCheck,
	RichText
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ContentColumn = ({ title, onChangeTitle, content, onChangeContent, image, onChangeImage }) => {
    return (
        <div>
            <RichText
                tagName='h3'
                value={title}
                onChange={onChangeTitle}
                placeholder={__('Enter title...', 'danstoakes-content-three-col')}
            />
            <RichText
                tagName='p'
                value={content}
                onChange={onChangeContent}
                placeholder={__('Enter content...', 'danstoakes-content-three-col')}
            />
            <MediaUploadCheck>
                <MediaUpload
                    onSelect={onChangeImage}
                    allowedTypes={['image']}
                    value={image ? image.id : null}
                    render={({ open }) => (
                        <button onClick={open}>
                            {image ? (
                                <img src={image.url} alt={image.alt} />
                            ) : (
                                'Select Image'
                            )}
                        </button>
                    )}
                />
            </MediaUploadCheck>
        </div>
    );
};

export default ContentColumn;