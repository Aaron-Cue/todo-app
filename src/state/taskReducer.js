export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // NEW STATE WITH NEW TASK ADDED
      return [...state, action.payload]
    }
    case "DELETE": {
      // NEW STATE WITH TASK DELETED
      return state.filter(task => task.id !== action.payload.id)
    }
    default: {
      throw new Error(`unknown action type: ${action.type}`);
    }
  }
}