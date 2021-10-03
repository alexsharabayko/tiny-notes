import React, { ReactElement } from 'react';
import { useParams } from 'react-router';

export const ViewItem = (): ReactElement => {
  const { id } = useParams<{ id: string }>();

  return <div>
    View Item {id}
  </div>
};
