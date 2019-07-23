export const initialState = {
  todoArray: [
    {
      task: "Study Japanese",
      completed: false,
      id: Date.now()
    },

    {
      task: "Smoke ribs",
      completed: false,
      id: Date.now()
    },

    {
      task: "Take out garbage",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
        // How awesome is Formik?  It makes everything easier
      return {
          ...state,
          todoArray: [...state.todoArray, action.payload]
      }
      case "TOGGLE_COMPLETED":
          return {
              ...state
          }

      case "CLEAR_COMPLETED":
          return {
              ...state
          }
          default:
              return state;
  }
};
