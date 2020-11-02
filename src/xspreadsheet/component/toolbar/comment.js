import DropdownItem from './dropdown_item';
import DropdownColor from '../dropdown_color';
import ToggleItem from './toggle_item';


export default class Comment extends ToggleItem {
  constructor(comment) {
    super('comment');
  }

  click(){
    // debugger
    super.click()
  }
//   dropdown() {
//     const { tag, value } = this;
//     return new DropdownColor(tag, value);
//   }
}
