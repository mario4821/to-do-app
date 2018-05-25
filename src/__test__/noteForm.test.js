import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/NoteForm/index';

configure({ adapter: new Adapter() });

describe('Note form test', () => {
  test('testing for initial state', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});
