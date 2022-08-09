import { useParams, Link } from '@solidjs/router';
import { createMemo, For, Suspense } from 'solid-js';
import { emptyContent } from '../api/contents';
import { Tag } from '../components/Tag';
import { TagList } from '../components/TagList';
import { useContentCtx } from '../context/contents';
import styles from './About.module.css';
import viewStyles from './View.module.css';
export default function About() {
  const contents = useContentCtx();
  if (!contents) {
    throw new Error('contents ctx data not available');
  }
  const data = createMemo(() => {
    if (!contents.loading) {
      const ret = contents.contents.get('about');
      if (ret) return ret;
    }
    return emptyContent;
  });
  return (
    <div class='flex'>
      <div style='display: flex;'>
        <Suspense fallback={<span>Suspended!</span>}>
          <div class={styles['links-bar']}>
            <Link href='/about/test1'>test1</Link>
            <Link href='/about/test2'>test2</Link>
            <Link href='/about/test3'>test3</Link>
            <Link href='/about/test4'>test4</Link>
          </div>
          <div class={viewStyles['intro']}>
            <h1>{data().title}</h1>
            <p>{data().desc}</p>

            <TagList tags={data().tags} />
          </div>
        </Suspense>
      </div>
      <div class={viewStyles['content']}>
        <p>{data().content}</p>
      </div>
    </div>
  );
}
