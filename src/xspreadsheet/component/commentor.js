import { h } from './element';
import { cssPrefix } from '../config';


let cid=1
class Comment{
    constructor(content){
        this.content=content
        this.el=h('div', `${cssPrefix}-comment`).css({position:'absolute',top:'100px',left:'200px',width:'400px',height:'300px'}).on('click',(e)=>{debugger})
        const textArea=h('textarea',`${cssPrefix}-comment-textarea`)
        textArea.on('mousedown.stop',(e)=>{debugger})

        textArea.el.addEventListener('click',(e)=>{debugger})
        this.el.child(textArea.el)
    }
}
export default class Commentor{
    constructor(data){
        this.data=data
        this.el=h('div', `${cssPrefix}-comments`).child(new Comment().el)
        this.comments=[]
    }
    show(){

    }
    init(){
        const data=this.data
        // 获取选择的cell
        data.setSelectedCellAttr('commentId', cid++);
        const cell=data.getSelectedCell()
        this.comments[cid]=new Comment()
        this.el.child(this.comments[cid].el)
        debugger
    }
}