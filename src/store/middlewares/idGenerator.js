const idGenerator = store => next => action => {
    if (action.payload.isGenerateId && action.payload.mealPlan) {
        action.payload.mealPlan.map(obj => (obj.id = Number.parseInt(Math.random()*100000)))
    }
    next(action);
  };
  
  export default idGenerator;