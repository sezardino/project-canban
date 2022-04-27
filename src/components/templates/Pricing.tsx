/* eslint-disable react/no-unescaped-entities */
import { Button, Heading, Text } from '../atoms';

export const PricingTemplate = () => {
  const prices = [
    {
      id: 'free',
      title: 'Free',
      description: 'For everyone',
      price: '0',
      features: ['Only One User', '2 Boards', 'Unlimited columns', 'Unlimited cards', 'Unlimited labels'],
      path: '/demo',
      cta: 'Try the demo',
    },
    {
      id: 'pro',
      title: 'Premium',
      description: 'For professionals',
      price: '10',
      features: [
        'Unlimited Users',
        'Unlimited Boards',
        'Unlimited Columns',
        'Unlimited Cards',
        'Unlimited Comments',
        'Unlimited labels',
      ],
      path: '/soon',
      cta: 'Get the pro',
    },
    {
      id: 'business',
      title: 'Business',
      description: 'For businesses',
      price: '50',
      features: [
        'Unlimited Users',
        'Unlimited Boards',
        'Unlimited Columns',
        'Unlimited Cards',
        'Unlimited Comments',
        'Unlimited labels',
        'Unlimited custom fields',
      ],
      path: '/soon',
      cta: 'Get the pro',
    },
  ];

  return (
    <section className="container mx-auto mt-20 grid grid-cols-4 gap-5">
      <div className="self-center">
        <Heading type="h1" styledAs="h2">
          Let's get started
        </Heading>
        <Text size="xl" className="mt-4">
          All prices are fake, this page just created for use TailwindCSS
        </Text>
      </div>
      <ul className="flex gap-8 justify-around col-start-2 col-end-5">
        {prices.map((price) => (
          <li
            key={price.id}
            className="grid gap-5 items-start justify-center text-center shadow-md p-10 rounded-3xl w-full transition-shadow hover:shadow-2xl hover:shadow-teal-500"
          >
            <div>
              <Heading styledAs="h6" color="info">
                {price.title}
              </Heading>
              <Heading type="h3" styledAs="h1" color="secondary">
                ${price.price}
              </Heading>
              <Text size="xl" color="primary">
                {price.description}
              </Text>
            </div>
            <ul className="grid items-start gap-2">
              {price.features.map((feature) => (
                <li key={feature}>
                  <Text size="xl" color="warning">
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>
            <Button to={price.path} size="lg" className="mt-auto justify-center">
              {price.cta}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
