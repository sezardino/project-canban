import { Button, Textarea } from '@components/atoms';

function App(): JSX.Element {
  return (
    <main>
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
    </main>
  );
}

export default App;
