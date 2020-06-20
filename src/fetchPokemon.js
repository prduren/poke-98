import axios from "axios";
import FETCH_POKEMON_START from "store";

async function fetchPokemon() {
  const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  return (dispatch) => {
    dispatch(addTodoStarted());
  };
}

// export const addTodo = ({ title, userId }) => {
//   return (dispatch) => {
//     dispatch(addTodoStarted());

//     axios
//       .post(`https://jsonplaceholder.typicode.com/todos`, {
//         title,
//         userId,
//         completed: false,
//       })
//       .then((res) => {
//         // dispatch(addTodoSuccess(res.data));
//       })
//       .catch((err) => {
//         // dispatch(addTodoFailure(err.message));
//       });
//   };
// };

const addTodoStarted = () => ({
  type: FETCH_POKEMON_START,
});

// const addTodoSuccess = (todo) => ({
//   type: ADD_TODO_SUCCESS,
//   payload: {
//     ...todo,
//   },
// });

// const addTodoFailure = (error) => ({
//   type: ADD_TODO_FAILURE,
//   payload: {
//     error,
//   },
// });
