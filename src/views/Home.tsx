import { useContentCtx } from '../context/contents';
import { createMemo } from 'solid-js';
import { emptyContent } from '../api/contents';
import { TagList } from '../components/TagList';
export default function Home() {
  const contents = useContentCtx();
  if (!contents) {
    throw new Error('contents ctx data not available');
  }
  const data = createMemo(() => {
    if (!contents.loading) {
      const ret = contents.contents.get('home');
      if (ret) return ret;
    }
    return emptyContent;
  });
  return (
    <div style='display:flex; flex-direction: column; align-items: start;'>
      <h1>{data().title}</h1>
      <article>{data().desc}</article>
      <TagList tags={data().tags} horizontal />
      <div class='display: flex'>
        <p>{data().content}</p>
      </div>
    </div>
  );
}
