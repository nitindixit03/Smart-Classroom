import { PreJoin } from "@livekit/components-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Lobby() {

    const navigate = useNavigate();

    const call = () => {
        axios.get("http://localhost:3000/getToken").then((res) => {
            navigate("/videocall", {state: {token: res.data}});
        });
    }
    return (
        <div>
            <PreJoin onSubmit={call}/>
        </div>
    )
}