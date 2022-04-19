import { Button, Textarea, Input, Tooltip, Badge } from '@components/atoms';

function App(): JSX.Element {
  return (
    <main className="py-20 container mx-auto grid content-start gap-8">
      <div>
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
    </main>
  );
}

export default App;
