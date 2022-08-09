import { Content, ContentMap } from '../api/contents';
const data: any = {
  home: {
    title: 'Home',
    desc: 'Friendly and awesome welcome for all.',
    content: "this is gonna be markdown in the future. Regarless, remember to mud ya'lls!",
    tags: ['fresh', 'inclusion'],
  },
  about: {
    title: 'About',
    desc: 'A little bit of more information about how the site is build.',
    content: `this is gonna be markdown in the future hopefully. Maybe even today if I come across something decent. 
      Finding/setting up/ writing your own markdown parser sound so much more fun than having to spend time on creating content!`,
    tags: ['fresh', 'markdown', 'setup', 'enthusiasm'],
  },
  magicks: {
    title: 'The home away from home',
    desc: "I'm totally putting hc wip testing code here, even worse than the rest of the sad system:)",
    content: "this is gonna be markdown in the future. Regarless, remember to multi-user dungeon ya'lls!",
    tags: ['fresh', 'markdown'],
  },
};
export const fillContent = (name: string) => {
  if (!name) {
    throw new Error('fillContent called with falsy parameter: ' + JSON.stringify(name));
  }
  if (!data[name]) {
    throw new Error('fillContent empty data for ' + name + ' data:' + JSON.stringify(data));
  }
  console.log('fillContent', name);
  const ret: Content = { title: '', desc: '', content: '', tags: [] };
  ret.title = data[name].title;
  ret.desc = data[name].desc;
  ret.content = data[name].content;
  ret.tags = data[name].tags;
  return ret;
};
