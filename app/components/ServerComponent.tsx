// sayHello simply returns a string, and does not need `useReducer`.
import { sayHello } from "../components/Counter";

export default () => {
  return <div>{sayHello()}</div>;
};
