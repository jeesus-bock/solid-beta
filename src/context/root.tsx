import { createContext, createResource, useContext, Context } from 'solid-js';
import { getUsers } from '../api/users';
import { getContents, Content } from '../api/contents';

const RootContext = createContext();

export function CtxProvider(props: any) {
  console.log('initing ctx provide');
  const [users, { refetch: rfUsers }] = createResource(getUsers);

  const state: State = {
    get users() {
      return users() || [];
    },
    rfUsers,
  };
  return <RootContext.Provider value={state}>{props.children}</RootContext.Provider>;
}

export function useCtx(): State {
  return useContext<State>(RootContext as Context<State>);
}

// Deifintion of the schema of the context
interface State {
  users: string[];
  rfUsers: (info?: unknown) => string[] | Promise<string[]> | null | undefined;
}
