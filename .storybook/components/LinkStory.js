import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from '../../components/Link';

const additionalProps = {
  onClick: () => { console.log('Clicked!'); },  // eslint-disable-line no-console
  className: 'some-class',
};

storiesOf('Link', module)
  .addWithInfo(
    '',
    `
      Links are typically used as a means of navigation either within the application, to a place outside, or to a resource.
      For anything else, especially things that change data, you should be using a button.
    `,
    () => (
      <Link href="#" {...additionalProps}>A simple link</Link>
  ));
