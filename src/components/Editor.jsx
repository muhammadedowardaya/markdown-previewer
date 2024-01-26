import { BsFileEarmarkCode } from 'react-icons/bs';
import { CgMaximizeAlt, CgMinimize } from 'react-icons/cg';
import '../styles/Editor.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	inputText,
	toggleEditorMaximize,
	toggleShowPreview,
} from '../features/markdown/markdownSlice';

export default function Editor() {
	const dispatch = useDispatch();
	const editorMaximize = useSelector((state) => state.markdown.editorMaximize);
	const showEditor = useSelector((state) => state.markdown.showEditor);
	const text = useSelector((state) => state.markdown.text);

	const onEditorChangeHandler = (event) => {
		dispatch(inputText(event.target.value));
	};

	const maximizeHandler = () => {
		dispatch(toggleEditorMaximize());
		dispatch(toggleShowPreview());
	};

	return (
		<div className={`editor-wrap ${!showEditor && 'hide'}`}>
			<div className="toolbar">
				<div className="icon">
					<BsFileEarmarkCode />
					<span>Editor</span>
				</div>
				<div className="icon cursor-pointer" onClick={maximizeHandler}>
					{editorMaximize ? <CgMinimize /> : <CgMaximizeAlt />}
				</div>
			</div>
			<textarea
				name="editor"
				id="editor"
				onChange={onEditorChangeHandler}
				className={`${editorMaximize && 'maximize'}`}
                value={text && text}
			></textarea>
		</div>
	);
}
