export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      // NEW STATE WITH NEW TASK ADDED
      return [...state, action.payload]
    }
    case 'DELETE': {
      // NEW STATE WITH TASK DELETED
      return state.filter(task => task.id !== action.payload.id)
    }
    case 'EDIT': {
      // NEW STATE WITH TASK EDITED
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            description: action.payload.description,
            deadline: action.payload.deadline,
            priority: action.payload.priority
          }
        }
        return task
      })
    }
    default: {
      throw new Error(`unknown action type: ${action.type}`)
    }
  }
}