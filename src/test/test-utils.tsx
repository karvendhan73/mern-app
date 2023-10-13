/* eslint-disable import/export */
/* eslint-disable react-refresh/only-export-components */
import { render } from '@testing-library/react';
import { FC, ReactElement, ReactNode } from 'react';
import renderer, { TestRendererOptions } from 'react-test-renderer';
declare type TestRendererType = typeof import('react-test-renderer');

interface Props {
  children?: ReactNode;
}

const AllProviders: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement, options = {}) => render(ui, { wrapper: AllProviders, ...options });

const customCreate = (ui: ReactElement, options?: TestRendererOptions) =>
  renderer.create(<AllProviders>{ui}</AllProviders>, options);

const customRenderer: TestRendererType = {
  ...renderer,
  create: customCreate,
};

export * from '@testing-library/react';
export { customRender as render };
export { customRenderer as renderer };
