import { Button, ContentEditable, Modal } from '@/components';
import { appActions, asyncActions, useAppDispatch, useAppSelector } from '@/store';

export interface CardModalProps {
  cardId: string | null;
}

export const CardModal: React.FC<CardModalProps> = (props) => {
  const { cardId } = props;
  const cards = useAppSelector((state) => state.demoBoard.cards);
  const dispatch = useAppDispatch();
  const card = cards.find((card) => card.id === cardId);

  if (!card) {
    return null;
  }

  const onCardUpdate = (field: string, value: string) => {
    dispatch(asyncActions.updateCard({ id: card.id, fields: { [field]: value } }));
  };

  const closeHandler = () => {
    dispatch(appActions.setSelectedCard(null));
  };

  return (
    <Modal isOpen={!!cardId} closeHandler={closeHandler}>
      <ContentEditable
        text={card.title}
        submitHandler={(text) => onCardUpdate('title', text)}
        className="relative min-w-[60vw] flex flex-shrink-0 items-center justify-between py-4 pb-9 border-b border-gray-200 rounded-t-md text-gray-800 group"
      >
        <h5 className="w-full text-xl font-medium leading-normal">{card.title}</h5>
      </ContentEditable>
      <ContentEditable
        text={card.description}
        submitHandler={(text) => onCardUpdate('description', text)}
        type="textarea"
        className="py-4 pb-10 border-b border-gray-200"
      >
        <p>{card.description || <span className="text-gray-300">Description goes here</span>}</p>
      </ContentEditable>

      <div className="py-4 flex justify-end">
        <Button onClick={closeHandler}>Close</Button>
      </div>
    </Modal>
  );
};
