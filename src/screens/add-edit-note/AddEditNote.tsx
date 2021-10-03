import React, { FormEvent, ReactElement, useState } from 'react';
import { TextInput } from '../../components/text-input/TextInput';
import { TextArea } from '../../components/text-area/TextArea';
import { IItemCreate, ItemType } from '../../domains/todo';

interface IProps {
  onItem: (item: IItemCreate) => void;
}

export const AddEditNote = ({ onItem }: IProps): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const isSubmitAllowed = !!title && !!text;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (isSubmitAllowed) {
      onItem({
        title,
        text,
        type: ItemType.NOTE,
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-b-20">
        <TextInput label="Title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="m-b-20">
        <TextArea label="Text" resize="vertical" rows={20} value={text} onChange={e => setText(e.target.value)}  />
      </div>

      <div style={{ textAlign: 'right' }}>
        <button className="btn" disabled={!isSubmitAllowed}>Add</button>
      </div>
    </form>
  );
};
