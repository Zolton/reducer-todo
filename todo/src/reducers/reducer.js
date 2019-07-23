export const initialState = {
  todoArray: [
    {
      task: "Study Japanese",
      completed: false,
      id: 0
    },

    {
      task: "Smoke ribs",
      completed: false,
      id: 1
    },

    {
      task: "Take out garbage",
      completed: false,
      id: 2
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
              ...state,
             todoArray: state.todoArray.map(task=>{
                 if (action.payload === task.id) {
                     return {
                         ...task,
                         completed: !task.completed
                     }
                 }
                 return task;
             })

          }

        //   case 'TOGGLE_ITEM':
        //         return {
        //           ...state,
        //           groceries: state.groceries.map(item => {
        //             if (action.payload === item.id) {
        //               return {
        //                 ...item,
        //                 // name: item.name,
        //                 // id: item.id,
        //                 // purchased: item.purchased,
        //                 purchased: !item.purchased
        //               };
        //             }
        //             return item;
        //           })
        //         };




      case "CLEAR_COMPLETED":
          return {
              ...state
          }
          default:
              return state;
  }
};
