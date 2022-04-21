import { Card } from '@/components/molecules';

import { tasks } from './mock';

export const Board: React.FC = () => {
  return (
    <div>
      <h1>Board1</h1>
      {tasks.map((task) => (
        <Card key={task.id} {...task} />
      ))}
    </div>
  );
};
