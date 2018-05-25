import React from 'react';
import NoteItem from '../NoteItem/index';
import autoBind from '../../utils/index';

export default class NotesList extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NotesList);
  }
  render() {
    return (
      <div>
        <ul className="noteList">
        { 
          this.props.notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              note={note}
              id={note.id}
                handleRemoveNote={this.props.handleRemoveNote}
                />
                );
              })
            }
          </ul>
      </div>
    );
  }
}
