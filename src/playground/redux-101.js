const { createStore } = require("redux");

const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SET: 'SET',
}

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: actions.INCREMENT,
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: actions.DECREMENT,
  decrementBy
});

const resetCount = () => ({
  type: actions.RESET
});

const setCount = ({count = 0} = {}) => ({
  type: actions.SET,
  count
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + action.incrementBy };
    case actions.DECREMENT:
      return { count: state.count - action.decrementBy };
    case actions.RESET:
      return { count: 0 };
    case actions.SET:
      return { count: action.count};
    default:
      if (action.type !== '@@redux/INIT') {
        throw new Error(`Type match not found for ${action.type}`);
      }
      return state;
  };

});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState().count);
})
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ decrementBy: 2}));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({count: 77}));
store.dispatch(setCount());


unsubscribe();