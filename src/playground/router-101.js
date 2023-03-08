const { createStore } = require("redux");

const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SET: 'SET',
}

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case actions.DECREMENT:
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case actions.RESET:
      return { count: 0 }
    case actions.SET:
      return { count: action.count || 0 }
    default:
      return state;
  };

});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState().count);
})
store.dispatch({
  type: actions.INCREMENT,
  incrementBy: 5
});
store.dispatch({
  type: actions.INCREMENT
});
store.dispatch({
  type: actions.INCREMENT
});
store.dispatch({
  type: actions.RESET
});
store.dispatch({
  type: actions.DECREMENT
});
store.dispatch({
  type: actions.DECREMENT,
  decrementBy: 5
});
store.dispatch({
  type: actions.SET,
  count: 101
})
store.dispatch({
  type: actions.SET,
})

unsubscribe();