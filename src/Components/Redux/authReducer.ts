
export class authState {
    workId: number = -1;
    email: string = "";
    name: string = "guest";
    token: string = "";
    userType: string = "";
    isLogged:boolean = false;
}

//login, logout, updateToken
export enum AuthActionType {
    login = "login",
    logout = "logout",
    updateToken = "updateToken",
    updateId = "updateId"
}

export interface AuthAction {
    type: AuthActionType,
    payload?: any
}

export function loginAction(user: authState): AuthAction {
    return { type: AuthActionType.login, payload: user }
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.logout }
}

export function updateTokenAction(token: string): AuthAction {
    return { type: AuthActionType.updateToken, payload: token }
}
export function updateWorkIdAction(workId: number): AuthAction {
    return { type: AuthActionType.updateId, payload: workId }
}

export function AuthReducer(currentState: authState = new authState(), action: AuthAction): authState {
    let newState = { ...currentState };

    switch (action.type) {
        case AuthActionType.login:
            newState = action.payload;
            break;
        case AuthActionType.logout:
            newState = new authState();
            break;
        case AuthActionType.updateToken:
            newState.token = action.payload;
            break;
    }

    return newState;
}