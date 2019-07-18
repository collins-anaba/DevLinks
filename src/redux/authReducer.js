// Needs work

const initialState = {
    authError: null
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_ERROR': 
        return {
            ...state,
            authError: 'Login failed'
        }

        case 'LOGIN_SUCCESS':
        return {
                ...state,
                authError: null
        }

        case 'REGISTER_SUCCESS':
        return {
            ...state,
            authError: null
        }

        case 'REGISTER_ERROR':
        return {
            ...state,
            authError: 'Register unsuccessful'
        }

        case 'LOGOUT_SUCCESS':
        return state

        default:
        return state
    }
}