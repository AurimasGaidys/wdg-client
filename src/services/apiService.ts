import { LoginDto } from "@/models/dto/loginDto";

const testMode = true;

const SET_TEAM_NAME = "https://europe-west3-wq-prod.cloudfunctions.net/SetTeamName"
const LOGIN = "https://europe-west3-wq-prod.cloudfunctions.net/LoginLeader"

export const Login = async (dto: LoginDto) => {
   const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dto),
    })

    const data = await response.json()
    console.log(data);

    return data;
}
