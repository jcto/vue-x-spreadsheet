import { h } from './element';
import { cssPrefix } from '../config';

// 用户点击批注菜单或点击选中带有批注的单元格进行显示文本框进行输入
// 点击菜单时新建 新建需要编辑 然后保存到cell属性里
// 点击单元格时显示 显示时传入原始值

let cid=1

export default class Commentor{
    constructor(){
        this.el=h('div', `${cssPrefix}-comments`)
        this.areaEl=h('div', `${cssPrefix}-comments-area`)
        this.commtEl=h('div', `${cssPrefix}-comment`)
        this.txtAreaEl=h('textarea',`${cssPrefix}-comment-textarea`)
        this.txtAreaEl.on('mousedown.stop',(e)=>{}).on('click.stop',(e)=>{}).on('input',(e)=>{
            this.data.setSelectedCellAttr('content',e.target.value)
        })
        this.areaEl.child(this.commtEl.child(this.txtAreaEl))
        this.el.child(this.areaEl).hide()
        this.freeze = { w: 0, h: 0 };

    }
    setOffset(cellRect){
        const {areaEl, freeze, el,}=this
        const {top,left,height,width,t,l}=cellRect
        const box=this.areaEl.box()
        const elOffset = { left: 0, top: 0 };
      // top left
      if (freeze.w > l && freeze.h > t) {
        //
      } else if (freeze.w < l && freeze.h < t) {
        elOffset.left = freeze.w;
        elOffset.top = freeze.h;
      } else if (freeze.w > l) {
        elOffset.top = freeze.h;
      } else if (freeze.h > t) {
        elOffset.left = freeze.w;
      }
      el.offset(elOffset);
      areaEl.offset({ left: left - elOffset.left-100+width/2 , top: top - elOffset.top +height+5 });
    }
    setFreezeLengths(width, height) {
        this.freeze.w = width;
        this.freeze.h = height;
    }
    show(data){
        this.data=data
        this.updateContent()
        const cellRect =data.getSelectedRect()
        this.setOffset(cellRect)
        this.el.show()

    }
    clear(){
        this.el.hide()
    }
    updateContent(){
        this.txtAreaEl.el.value=this.data.getSelectedCell().content||''
    }
    showComment(){}
    init(data){
        this.data=data
        // 获取选择的cell
        data.setSelectedCellAttr('commentId', cid++);
        this.show(data)
    }
}