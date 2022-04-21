import { Toast } from '@/common';
import { Button, Textarea, Input, Tooltip, Badge, Heading, Text, Spinner, Modal } from '@/components/atoms';
import { Toast as ToastComponent } from '@/components/molecules/Toast/Toast';

import { useState } from 'react';

export const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toasts: Toast[] = [
    {
      type: 'success',
      message: 'Success message',
    },
    {
      type: 'error',
      message: 'Error message',
    },
    {
      type: 'warning',
      message: 'Warning message',
    },
    {
      type: 'info',
      message: 'Info message',
    },
  ];

  return (
    <>
      <div>
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Modal isOpen={isModalOpen} closeHandler={() => setModalOpen(false)}>
          lol
        </Modal>
        <h2>buttons</h2>
        <div>
          <h3>Outlined</h3>
          <div className="flex gap-5">
            <Button isOutlined>Button</Button>
            <Button isOutlined color="danger">
              Button
            </Button>
            <Button isOutlined color="dark">
              Button
            </Button>
            <Button isOutlined color="info">
              Button
            </Button>
            <Button isOutlined color="light">
              Button
            </Button>
            <Button isOutlined color="secondary">
              Button
            </Button>
            <Button isOutlined color="success">
              Button
            </Button>
            <Button isOutlined color="warning">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h3>Filled</h3>
          <div className="flex gap-5">
            <Button>Button</Button>
            <Button color="danger">Button</Button>
            <Button color="dark">Button</Button>
            <Button color="info">Button</Button>
            <Button color="light">Button</Button>
            <Button color="secondary">Button</Button>
            <Button color="success">Button</Button>
            <Button color="warning">Button</Button>
          </div>
        </div>
        <div>
          <h3>FullWidth</h3>
          <div className="grid gap-5">
            <Button isFullWidth>Button</Button>
            <Button isFullWidth color="danger">
              Button
            </Button>
            <Button isFullWidth color="dark">
              Button
            </Button>
            <Button isFullWidth color="info">
              Button
            </Button>
            <Button isFullWidth color="light">
              Button
            </Button>
            <Button isFullWidth color="secondary">
              Button
            </Button>
            <Button isFullWidth color="success">
              Button
            </Button>
            <Button isFullWidth color="warning">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h3>Rounded</h3>
          <div className="flex gap-5">
            <Button isRounded>Button</Button>
            <Button isRounded color="danger">
              Button
            </Button>
            <Button isRounded color="dark">
              Button
            </Button>
            <Button isRounded color="info">
              Button
            </Button>
            <Button isRounded color="light">
              Button
            </Button>
            <Button isRounded color="secondary">
              Button
            </Button>
            <Button isRounded color="success">
              Button
            </Button>
            <Button isRounded color="warning">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h3>Rounded Outlined</h3>
          <div className="flex gap-5">
            <Button isRounded isOutlined>
              Button
            </Button>
            <Button isRounded isOutlined color="danger">
              Button
            </Button>
            <Button isRounded isOutlined color="dark">
              Button
            </Button>
            <Button isRounded isOutlined color="info">
              Button
            </Button>
            <Button isRounded isOutlined color="light">
              Button
            </Button>
            <Button isRounded isOutlined color="secondary">
              Button
            </Button>
            <Button isRounded isOutlined color="success">
              Button
            </Button>
            <Button isRounded isOutlined color="warning">
              Button
            </Button>
          </div>
        </div>
        <div>
          <h3>Link</h3>
          <div className="flex gap-5">
            <Button isLink>Button</Button>
            <Button isLink color="danger">
              Button
            </Button>
            <Button isLink color="dark">
              Button
            </Button>
            <Button isLink color="info">
              Button
            </Button>
            <Button isLink color="light">
              Button
            </Button>
            <Button isLink color="secondary">
              Button
            </Button>
            <Button isLink color="success">
              Button
            </Button>
            <Button isLink color="warning">
              Button
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2>Textarea</h2>
        <Textarea label="textarea" placeholder="Type Something Nice" />
      </div>
      <div>
        <h2>Inputs</h2>
        <Input label="Default Input" placeholder="Type Something Nice" />
        <Input disabled label="Disabled Input" placeholder="Type Something Nice" />
        <Input label="Input With Helper Text" helperText="helper text" placeholder="Type Something Nice" />
      </div>
      <div>
        <h2>Tooltips</h2>
        <div className="mt-10 flex gap-8">
          <Tooltip label="Tooltip Content">
            <Button>Tooltip Top</Button>
          </Tooltip>
          <Tooltip position="left" label="Tooltip Content">
            <Input label="Default Input" placeholder="Type Something Nice" />
          </Tooltip>
          <Tooltip position="bottom" label="Tooltip Content">
            <Button>Tooltip Bottom</Button>
          </Tooltip>
          <Tooltip position="right" label="Tooltip Content">
            <Button>Tooltip Right</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h2>Badges</h2>
        <div className="mt-10">
          <h1 className="text-9xl">
            Lol <Badge>lol</Badge>
          </h1>
          <h2 className="text-7xl">
            Lol <Badge>lol</Badge>
          </h2>
          <h3 className="text-5xl">
            Lol <Badge>lol</Badge>
          </h3>
          <h4 className="text-3xl">
            Lol <Badge>lol</Badge>
          </h4>
          <h5 className="text-xl">
            Lol <Badge>lol</Badge>
          </h5>
          <h6 className="text-xs">
            Lol <Badge>lol</Badge>
          </h6>
          <Button color="danger">
            Button <Badge color="info">lol</Badge>
          </Button>
        </div>
      </div>
      <div>
        <h2>Headings</h2>
        <div className="mt-10">
          <Heading type="h1">H1</Heading>
          <Heading color="danger" type="h2">
            H2
          </Heading>
          <Heading color="info" type="h3">
            H3
          </Heading>
          <Heading color="light" type="h4">
            H4
          </Heading>
          <Heading color="primary" type="h5">
            H5
          </Heading>
          <Heading color="secondary" type="h6">
            H6
          </Heading>
        </div>
      </div>
      <div>
        <h2>Text</h2>
        <div className="mt-10 flex flex-col gap-8">
          <Text size="xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolor minus qui error. Aliquid nisi ab sunt
            cum est quisquam at corrupti expedita ratione iste.
          </Text>
          <Text size="sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minima nulla deleniti atque aspernatur
            reiciendis obcaecati incidunt recusandae inventore maxime ullam molestiae provident, a necessitatibus alias
            amet commodi expedita accusamus quaerat quas. Vitae porro ab id corrupti voluptatem! Fuga, totam? Suscipit
            ipsa perferendis dolorum quod voluptas cupiditate reprehenderit dolore enim?
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minima nulla deleniti atque aspernatur
            reiciendis obcaecati incidunt recusandae inventore maxime ullam molestiae provident, a necessitatibus alias
            amet commodi expedita accusamus quaerat quas. Vitae porro ab id corrupti voluptatem! Fuga, totam? Suscipit
            ipsa perferendis dolorum quod voluptas cupiditate reprehenderit dolore enim?
          </Text>
          <Text size="lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quas, in ipsa ut officiis adipisci! Eligendi
            optio pariatur dolores dicta deserunt ea mollitia aperiam temporibus? Consequuntur, magni ipsa a
            necessitatibus architecto maxime porro veniam quidem beatae magnam cupiditate, aliquid, voluptatum adipisci
            corporis est esse quisquam voluptas sapiente accusantium enim! Sed odio necessitatibus vero minima eligendi
            eos reprehenderit quam eveniet nobis? Est eligendi deleniti, quis consequatur, ex hic unde alias sed, sit
            eius eum animi aliquid!
          </Text>
          <Text size="xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora eum. Consectetur labore accusamus
            molestias sequi doloribus repudiandae aliquid ratione minus at quia. Culpa veritatis fugit eius tempore
            facere ducimus, iste, neque obcaecati enim eaque placeat quo nam magni ratione, temporibus a unde sunt.
            Itaque nihil laborum mollitia excepturi eveniet perspiciatis deserunt alias fugiat sapiente expedita
            veritatis, iusto vero cum blanditiis, corrupti quidem iure? Quibusdam veritatis corrupti minus commodi
            voluptatem incidunt, earum, accusamus inventore facilis consectetur, sequi mollitia vitae ab consequuntur.
            Ut ex minus quas, repudiandae placeat nulla quia natus debitis perferendis sapiente eum, quaerat quae
            dolorem, beatae pariatur! Suscipit?
          </Text>
          <Text color="primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illum atque laboriosam reprehenderit
            corrupti ratione alias aliquam commodi vero sint labore unde expedita fuga amet possimus debitis ex soluta,
            modi eos autem totam repellendus excepturi. Expedita, sed fuga illum est aut iste necessitatibus vero ipsum,
            id impedit, eaque veritatis ad? Harum, eos, quam eius qui iure dolore iste tempora tenetur eligendi quod
            labore provident, earum ratione! Esse assumenda repellendus omnis libero ut illo voluptate atque amet
            consectetur laboriosam, delectus architecto adipisci optio nemo aut soluta quas deleniti velit perferendis,
            animi, debitis odio nisi facilis facere. Distinctio iste non quos temporibus nihil esse fugiat ullam
            delectus maiores id, aut tenetur aperiam nostrum quisquam sit laboriosam quis voluptate! Reprehenderit
            perferendis, inventore aliquam enim, nisi a doloribus nemo ex dolores commodi suscipit culpa esse in, ut
            placeat nam illum quidem sunt earum excepturi vero numquam dolor neque! Voluptatum beatae numquam vitae eum
            rerum.
          </Text>
        </div>
      </div>
      <div>
        <h2>Toasts</h2>
        <div className="mt-10 grid grid-cols-2 gap-8">
          {toasts.map((toast, index) => (
            <ToastComponent key={index} {...toast} />
          ))}
        </div>
      </div>
      <div>
        <h2>Spinners</h2>
        <div className="mt-10 grid grid-cols-2 gap-8">
          <Spinner />
          <Spinner type="circle" size="xl" />
          <Spinner type="grow" size="xl" />
        </div>
      </div>
    </>
  );
};
