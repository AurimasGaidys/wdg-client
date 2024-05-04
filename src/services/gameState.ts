export class GameState {

    private static instance: GameState;

    private constructor() {
       
    }

    public static getInstance(): GameState {
        if (!GameState.instance) {
            GameState.instance = new GameState();
        }

        return GameState.instance;
    }

    public getGameState() {
        return "game state";
    }

    public Login(code: string) {
        console.log("set game state");
    }

    public isLoggedIn() {
        return true;
    }
}