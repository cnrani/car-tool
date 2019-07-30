

export const ADD_CAR_ACTION = 'ADD';
export const UPDATE_CAR_ACTION = 'UPDATE';
export const DELETE_CAR_ACTION = 'DELETE';
export const EDIT_CAR_ACTION = 'EDIT';
export const CANCEL_CAR_ACTION = 'CANCEL';
export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_REQUEST_CARS';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const ADD_CAR_DONE_ACTION = 'ADD_CAR_DONE';



export const createAddCarAction = car => (
    {   type: ADD_CAR_ACTION, payload: {car}}
);
/*

export const updateCarAction = car => (
    { type: UPDATE_CAR_ACTION, payload: {car}}
);
*/

/*
export const deleteCarAction = car => (
    { type: DELETE_CAR_ACTION, payload: {car}}
);
*/

export const editCarAction = carId => (
    { type: EDIT_CAR_ACTION, payload: {carId}}
);


export const cancelCarAction = car => (
    { type: CANCEL_CAR_ACTION, payload: {car}}
);


export const createRefreshCarsRequestAction = () => ({
    type: REFRESH_CARS_REQUEST_ACTION
});



export const createRefreshCarsDoneAction = (cars) =>({
    type: REFRESH_CARS_DONE_ACTION, payload:{cars}

});


export const addCarsAction = (cars) => ( {

    type: ADD_CAR_DONE_ACTION, payload:{cars}

});


export const refreshCars = () => { // refresh cars at server   //in java script we return fun

    return dispatch => {

        dispatch(createRefreshCarsRequestAction());       //request action
        return fetch('http://localhost:3050/cars')
            .then(res => res.json())
            .then(cars => dispatch(createRefreshCarsDoneAction(cars)));  // done action
    };

};




export const addCarAction = (car) => { // refresh cars at server   //in java script we return fun

    return (dispatch) => {

        //dispatch(createRefreshCarsRequestAction());       //we dont need as we dont need spinner
        return fetch('http://localhost:3050/cars', {
            method:'POST',
            headers : {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(car)
        }).then(() => dispatch(refreshCars()));  // is application is used by multiple people so we need to dispatch refreshCars() to fetch all the data added
    };              // we can reuse the refreshCar(0 function

};


export const updateCarAction = (car) => { // refresh cars at server   //in java script we return fun

    console.log(car.model);
    return (dispatch) => {

        //dispatch(createRefreshCarsRequestAction());       //we dont need as we dont need spinner
        return fetch(`http://localhost:3050/cars/${car.id}`, {
            method:'PUT',
            headers : {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(car)
        }).then(()=> dispatch(editCarAction(-1)))
            .then(() => dispatch(refreshCars()));  // is application is used by multiple people so we need to dispatch refreshCars() to fetch all the data added
    };              // we can reuse the refreshCar(0 function

};



export const deleteCarAction = (car) => { // refresh cars at server   //in java script we return fun

    return (dispatch) => {

        //dispatch(createRefreshCarsRequestAction());       //we dont need as we dont need spinner
        return fetch(`http://localhost:3050/cars/${car.id}`, {
            method:'DELETE'
        }).then(()=> dispatch(editCarAction(-1)))
            .then(() => dispatch(refreshCars()));  // is application is used by multiple people so we need to dispatch refreshCars() to fetch all the data added
    };              // we can reuse the refreshCar(0 function

};