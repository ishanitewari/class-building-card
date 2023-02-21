import { html } from 'lit';
import '../src/class-building-card.js';

export default {
  title: 'ClassBuildingCard',
  component: 'class-building-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <class-building-card
      style="--class-building-card-background-color: ${backgroundColor ||
      'white'}"
      .title=${title}
    >
    </class-building-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
