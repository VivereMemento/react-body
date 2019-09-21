const rewritingEatingType = store => next => action => {
    if (action.payload.isRewriteEatingType && action.payload.mealPlan) {
        action.payload.mealPlan.map(obj => {
            switch (obj.eatingType) {
                case 1: obj.eatingType = 'Breackfast'; break; //eatingType change to sort when use real api
                case 2: obj.eatingType = '1st snack';  break;
                case 3: obj.eatingType = 'Lunch main dish'; break;
                case 4: obj.eatingType = 'Lunch side dish'; break;
                case 5: obj.eatingType = '2nd snack'; break;
                case 6: obj.eatingType = 'Dinner main dish'; break;
                case 7: obj.eatingType = 'Dinner side dish'; break;
            }
        })
    }
    next(action);
  };
  
  export default rewritingEatingType;