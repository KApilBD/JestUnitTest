import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

import * as action from './actions';

describe("action ", () => {

    it("should create an action to search robots", () => {
        const text = 'wooo'
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        }
        expect(action.setSearchField(text)).toEqual(expectedAction);
    })


    it("handles requesting robots api", () => {
        const store = mockStore();
        store.dispatch(action.requestRobots())
        const actions = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(actions[0]).toEqual(expectedAction);
    })
})