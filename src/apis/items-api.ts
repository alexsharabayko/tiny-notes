import { IItem, IItemData, ItemType, ITodo } from '../domains/todo-domain';
import { UuidUtil } from '../utils/uuid/uuid';

const STORAGE_KEY = 'items';

export const apiFetchItems = (): Promise<IItem[]> => {
  const storeData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(storeData || '[]');

  return Promise.resolve(parsedData);
};

export const apiFetchItem = (id: string): Promise<IItem | undefined> => {
  return apiFetchItems().then(items => items.find(item => item.id === id));
};

export const apiCreateItem = (data: IItemData): Promise<IItem> => {
  return apiFetchItems()
    .then(items => {
      const item: IItem = {
        ...data,
        id: UuidUtil.generate(),
        createdAt: Date.now(),
      };

      items.push(item);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

      return item;
    });
};

export const apiUpdateItem = (id: string, itemData: IItemData): Promise<IItem> => {
  return apiFetchItems().then(items => {
    const index = items.findIndex(i => i.id === id);
    const item = items[index];

    if (item) {
      items[index] = {
        ...items[index],
        ...itemData,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

      return Promise.resolve(item);
    }

    return Promise.reject();
  });
};

export const apiDeleteItem = (id: string): Promise<void> => {
  return apiFetchItems().then(items => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.filter(i => i.id !== id)));
  });
};

export const apiCreateTodo = (title: string): Promise<ITodo> => {
  return Promise.resolve({
    title,
    completed: false,
    id: UuidUtil.generate(),
    createdAt: Date.now(),
  });
};

export const apiUpdateToggleComplete = (itemId: string, todoId: string): Promise<ITodo> => {
  return apiFetchItems()
    .then(items => {
      const item = items.find(i => i.id === itemId);

      if (item && item.type === ItemType.TODO) {
        const todo = item.todos.find(t => t.id === todoId);

        if (todo) {
          todo.completed = !todo.completed;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

          return Promise.resolve(todo);
        }
      }

      return Promise.reject();
    });
};
