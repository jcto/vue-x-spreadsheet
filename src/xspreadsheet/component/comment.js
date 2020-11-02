/* global document */
import { h } from './element';
import { bind } from './event';
import { cssPrefix } from '../config';

class Comment{
  constructor(data){
    this.data=data

  }
  // 显示批注
  show(){}
  // 重置批注
  reset(cell){

  }

}

// 批注类比toolbar selector 

export default function comment(cell,cellRect) {
// debugger
  const {
    left, top, width, height,
  } = cellRect;
  const el = h('div', `${cssPrefix}-comment`).html('测试批注内容').show();
  this.overlayerCEl.el.appendChild(el.el);
  const elBox = el.box();
  // console.log('elBox:', elBox);
  el.css('left', `${left + (width / 2) - (elBox.width / 2)}px`)
    .css('top', `${top + height+41+this.data.settings.row.height}px`);

//   bind(target, 'mouseleave', () => {
//     if (document.body.contains(el.el)) {
//       document.body.removeChild(el.el);
//     }
//   });

//   bind(target, 'click', () => {
//     if (document.body.contains(el.el)) {
//       document.body.removeChild(el.el);
//     }
//   });
}
