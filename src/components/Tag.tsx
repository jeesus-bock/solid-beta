import { Component } from 'solid-js';
import style from './Tag.module.css';
export interface TagProps {
  text: string;
  bgColor?: string;
  color?: string;
}
export const Tag: Component<TagProps> = (p) => {
  return (
    <div style={{ 'background-color': p.bgColor || '#ccc', color: p.color || 'white' }} class={style.tag}>
      {p.text}
    </div>
  );
};
