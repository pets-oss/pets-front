import { render } from "@testing-library/react";
import { DocumentNode } from "graphql";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

interface MockOptions {
  query: DocumentNode;
  error?: Error;
  data?: any;
};

export function renderWithMockProvider(ui: any, { query, data, error }: MockOptions) {
  const mock: MockedResponse = {
    request: { query }
  };

  if (data) {
    mock.result = { data };
  }

  if (error) {
    mock.error = error;
  }

  // @ts-ignore
  return render(ui, { wrapper: props => <MockedProvider {...props} mocks={[mock]} /> })
}