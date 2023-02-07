// import React from 'react';

// class Demo extends React.Component{
//      componentDidMount() {
//       this.child.addEventListener('click', (e) => {
//           console.log('dom child');
//         })
//         this.parent.addEventListener('click', (e) => {
//           console.log('dom parent');
//         })

//         document.addEventListener('click', (e) => {
//           console.log('document');
//         })
//   }

//   childClick = (e) => {
//     console.log('react child');
//   }

//   parentClick = (e) => {
//     console.log('react parent');
//   }

//   render() {
//     return (
//       <div onClick={this.parentClick} ref={ref => this.parent = ref}>
//         <div onClick={this.childClick} ref={ref => this.child = ref}>
//           test
//         </div>
//       </div>)
//   }

// };

// export default Demo;
