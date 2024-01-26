import { createSlice } from '@reduxjs/toolkit';

const text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const initialState = {
	text: text,
	editorMaximize: false,
	previewMaximize: false,
	showEditor: true,
	showPreview: true,
};

export const markdownSlice = createSlice({
	name: 'markdown',
	initialState,
	reducers: {
		inputText: (state, action) => {
			state.text = action.payload;
		},
		toggleEditorMaximize: (state) => {
			state.editorMaximize = !state.editorMaximize;
		},
		togglePreviewMaximize: (state) => {
			state.previewMaximize = !state.previewMaximize;
		},
		toggleShowEditor: (state) => {
			state.showEditor = !state.showEditor;
		},
		toggleShowPreview: (state) => {
			state.showPreview = !state.showPreview;
		},
	},
});

export const {
	inputText,
	toggleEditorMaximize,
	togglePreviewMaximize,
	toggleShowEditor,
	toggleShowPreview,
} = markdownSlice.actions;

export default markdownSlice.reducer;
