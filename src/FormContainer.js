import { StorageContext } from './context';
import Form from './Form';
import {
  actionDecrementCounter,
  actionIncrementCounter,
} from './redux/actions';

function FormContainer() {
  return (
    <StorageContext.Consumer>
      {(store) => {
        const increment = () => {
          store.dispatch(actionIncrementCounter());
        };

        const decrement = () => {
          store.dispatch(actionDecrementCounter());
        };

        return (
          <Form
            state={store.getState()}
            increment={increment}
            decrement={decrement}
          />
        );
      }}
    </StorageContext.Consumer>
  );
}

export default FormContainer;
