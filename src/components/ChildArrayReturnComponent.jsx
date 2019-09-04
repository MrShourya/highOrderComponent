import React from 'react';
function ChildArrayReturnComponent(props) {
    return [
        // Don't forget the keys :)
        <p key="A">First item</p>,
        <a key="B">Second item</a>,
        props.success?(<div key="C">Success Item</div>):(<div key="C">Failure item</div>)
      ];
}
export default ChildArrayReturnComponent;

// render() {
//   // No need to wrap list items in an extra element!
//   return [
//     // Don't forget the keys :)
//     <li key="A">First item</li>,
//     <li key="B">Second item</li>,
//     <li key="C">Third item</li>,
//   ];
// }