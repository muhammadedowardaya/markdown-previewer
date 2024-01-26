import './styles/App.scss';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useSelector } from 'react-redux';

function App() {
	const editorMaximize = useSelector((state) => state.markdown.editorMaximize);
	const previewMaximize = useSelector((state) => state.markdown.previewMaximize);

    const hide = editorMaximize || previewMaximize;

	return (
		<div id="app">
			<div className={`title ${hide && 'hide'}`}>
				<h1>Markdown Previewer</h1>
				<p>By : Muhammad Edo Wardaya</p>
			</div>
			<Editor />
			<Previewer />
		</div>
	);
}

export default App;
