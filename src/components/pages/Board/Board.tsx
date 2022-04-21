import { Card, Column } from '@/components/molecules';

import { tasks } from './mock';

export const Board: React.FC = () => {
  return (
    <div>
      <Column label="TODO" items={tasks}>
        {(task) => <Card {...task} />}
      </Column>
    </div>
  );
};
