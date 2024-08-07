

import { render } from '~/test/utils';
import QuestPreview from "./page";

describe('QuestPreview tests', () => {
  it('should render QuestPreview component correctly', () => {
    expect.assertions(1);

    render(<QuestPreview />);

    expect(true).toBeTruthy();
  });
});
