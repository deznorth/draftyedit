import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './DraftyEditor.scss';

class DraftyEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),

    }

    onChange = (editorState) => {
        this.setState({editorState});
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState){
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    handleButtonClick = action => {
        switch(action){
            case 'BOLD':
                this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
                break;
            default:break;
        }
    }

    render() {
        return (
            <div className="DraftyEditor">
                <div className="controlBar">
                    <button onClick={() => this.handleButtonClick('BOLD')}><i className="fas fa-bold"></i></button>
                </div>
                <Editor 
                className="editor"
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                />
            </div>
        );
    }
}

export default DraftyEditor;