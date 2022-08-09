import { fillContent } from './contents-data';
import { sleep } from '../util/sleep';
export type ContentMap = Map<string, Content>;

export interface Content {
  title: string;
  desc: string;
  content: string;
  tags: string[];
}

export const emptyContent: Content = {
  title: '',
  desc: '',
  content: '',
  tags: [],
};


export const getContents = async (): Promise<ContentMap> => {
  console.log('api getting contents');
  await sleep(Math.random()*8000)
  console.log('returning wait for getContents');

  try {
    const ret: ContentMap= new Map();
    const home = fillContent('home');
    const about = fillContent('about');
    const magicks = fillContent('magics');
    ret.set('home', home);
    ret.set('about', about);
    ret.set('mahicks', magicks);
  } catch (e: any) {
    console.log('caught error', e);
    throw new Error(e);
  }
  return new Map<string, Content>;
};
export const getContent = async (type: string): Promise<Content> => {
  console.log('api getting contents', type);
  await sleep(Math.random()* 3000);
  console.log('returning wait for getContents');

  try {
    const ret = fillContent(type);
    return ret
  } catch (e: any) {
    console.log('caught error', e);
    throw new Error(e);
  }
};
