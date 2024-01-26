import React from 'react';
import { BsFileEarmarkCode } from 'react-icons/bs';

import '../styles/Previewer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { CgMaximizeAlt, CgMinimize } from 'react-icons/cg';
import { togglePreviewMaximize, toggleShowEditor } from '../features/markdown/markdownSlice';

export default function Previewer() {
	const text = useSelector((state) => state.markdown.text);
	const previewMaximize = useSelector(
		(state) => state.markdown.previewMaximize
	);
	const showPreview = useSelector(
		(state) => state.markdown.showPreview
	);
    const dispatch = useDispatch();

    const maximizeHandler = () => {
        dispatch(togglePreviewMaximize());
        dispatch(toggleShowEditor());
    }

	React.useEffect(() => {
		const sanitizedHTML = DOMPurify.sanitize(marked.parse(text));
		document.getElementById('preview').innerHTML = sanitizedHTML;
	}, [text]);

	return (
		<div className={`preview-wrap ${!showPreview && 'hide'}`}>
			<div className="toolbar">
				<div className="icon">
					<BsFileEarmarkCode />
					<span>Previewer</span>
				</div>
				<div className="icon cursor-pointer" onClick={maximizeHandler}>
					{previewMaximize ? <CgMinimize /> : <CgMaximizeAlt />}
				</div>
			</div>
			<div id="preview" className={`${previewMaximize && 'maximize'}`}></div>
		</div>
	);
}
