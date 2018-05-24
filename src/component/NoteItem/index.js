import React from 'react';

export default class NoteItem extends React.Component {
  render() {
    return (
        <div className="NoteItem">
        {this.props.note.title}
       {this.props.note.content}
        </div>
    );
  }
}
