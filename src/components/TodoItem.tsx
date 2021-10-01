import React, { useState, useCallback, useEffect } from 'react';

// const StyledTodoItem = styled.li`
//   padding: 15px 0;
//   list-style: none;
//
//   button {
//     background: ${({ theme }) => theme.lightGrey};
//     border: 0;
//     border-radius: 4px 4px 0 0;
//     margin-right: 15px;
//     padding: 10px;
//     cursor: pointer;
//
//     .fa-circle {
//       font-size: 16px;
//       color: ${({ theme }) => theme.darkerGrey};
//     }
//
//     .fa-check-circle {
//       color: ${({ theme }) => theme.darkestGrey};
//       font-size: 16px;
//       display: none;
//     }
//
//     &:hover {
//       background: ${({ theme }) => theme.darkerGrey};
//       transition: 0.3s;
//
//       .fa-circle {
//         transition: 0.3s;
//         display: none;
//       }
//
//       .fa-check-circle {
//         display: inline-block;
//       }
//     }
//   }
//
//   input {
//     font-size: 16px;
//     color: ${({ theme }) => theme.darkestGrey};
//     align-self: center;
//     width: 100%;
//     border: none;
//     outline: none;
//     background: ${({ theme }) => theme.backgroundColor};
//   }
//
//   div {
//     display: flex;
//     flex-direction: row;
//     border-bottom: 2px solid ${({ theme }) => theme.lightGrey};
//
//     &:hover {
//       border-color: ${({ theme }) => theme.darkerGrey};
//       transition: 0.3s;
//
//       button {
//         background: ${({ theme }) => theme.darkerGrey};
//         transition: 0.3s;
//       }
//
//       .fa-circle {
//         color: ${({ theme }) => theme.lightGrey};
//         transition: 0.3s;
//       }
//     }
//   }
// `;

const TodoItem = ({ deleteItem, item, editItem }: any) => {
  const [value, setValue] = useState(item.todo || '');

  const editHandler = useCallback(
    async (originalItem, editedItemValue) => {
      // await editItem(originalItem, editedItemValue);
    },
    [],
  );

  useEffect(() => {
    if (value !== item.todo) {
      editHandler(item, value);
    }
  }, [item, value]);

  return (
    <div>
      <button type="button" onClick={() => deleteItem(item)}>
        {/*<FontAwesomeIcon className="fa-circle" icon={faCircle} />*/}
        {/*<FontAwesomeIcon className="fa-check-circle" icon={faCheckCircle} />*/}
      </button>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          // editHandler();
        }}
      />
    </div>
  );
};

// TodoItem.propTypes = {
//   deleteItem: PropTypes.func.isRequired,
//   editItem: PropTypes.func.isRequired,
//   item: PropTypes.shape({
//     identifierKey: PropTypes.string,
//     todo: PropTypes.string,
//   }).isRequired,
// };

export default TodoItem;
