import { connect } from 'react-redux';

import Form from './Form';
import {
  actionDecrementCounter,
  actionIncrementCounter,
} from './redux/actions';

// function FormContainer() {
//   return (
//     <StorageContext.Consumer>
//       {(store) => {
//         const increment = () => {
//           store.
//         };

//         const decrement = () => {
//           store.dispatch(actionDecrementCounter());
//         };

//         return (
//           <Form
//             state={store.getState()}
//             increment={increment}
//             decrement={decrement}
//           />
//         );
//       }}
//     </StorageContext.Consumer>
//   );
// }

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(actionIncrementCounter());
    },
    decrement: () => {
      dispatch(actionDecrementCounter());
    },
  };
};
const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
