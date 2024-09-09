import { PreJoin } from "@livekit/components-react";
import { useNavigate } from "react-router-dom";

export default function Lobby() {

    const navigate = useNavigate();
    return (
        <div>
            <PreJoin onSubmit={() => navigate("/videocall")}/>
        </div>
    )
}