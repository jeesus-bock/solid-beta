import { createContext, createResource, useContext, Context } from 'solid-js';
import { getContent, Content, ContentMap } from '../api/contents';

const ContentContext = createContext();

export function ContentCtxProvider(props: any) {
  const [home, { refetch: rfHome }] = createResource('home', getContent);
  const [about, { refetch: rfAbout }] = createResource('about', getContent);
  const [magicks, { refetch: rfMagicks }] = createResource('magicks', getContent);

  const refetch = () => {
    console.log('refetching all content data');
    rfHome();
    rfMagicks();
    rfAbout();
  };
  const state: Contents = {
    get loading() {
      return home.loading || about.loading || magicks.loading;
    },
    get contents() {
      const ret = new Map();
      ret.set('home', home());
      ret.set('about', about());
      ret.set('magivks', magicks());
      return ret;
    },
    refetch,
  };
  return <ContentContext.Provider value={state}>{props.children}</ContentContext.Provider>;
}

export function useContentCtx(): Contents {
  return useContext<Contents>(ContentContext as Context<Contents>);
}

// Deifintion of the schema of the context
interface Contents {
  contents: ContentMap;
  loading: boolean;
  refetch: () => void;
}
