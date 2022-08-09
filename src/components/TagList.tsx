import { Component, For } from 'solid-js';
import { Tag } from './Tag';
import styles from './TagList.module.css';

export const TagList: Component<{ tags: Array<string>; horizontal?: boolean }> = (p) => {
  return (
    <div class={styles['tag-list']} style={{ 'flex-direction': p.horizontal ? 'column' : 'row' }}>
      <For each={p.tags}>{(tag: string) => <Tag text={tag} />}</For>
    </div>
  );
};
