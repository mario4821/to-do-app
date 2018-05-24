import React from 'react';

export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        <ul className="notes">
        {
          this.props.notes.map((note) => {
            return (
              <li key={note.id}>
              {note.title} : {note.content}
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}
