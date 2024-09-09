// server.js
import express from 'express';
import { AccessToken } from "livekit-server-sdk";
import cors from 'cors';
var totalUsers = [];

const app = express();
app.use(cors());
const port = 3000;
  
const createToken = async () => {
    let roomName = 'quickstart-room';
  // If this room doesn't exist, it'll be automatically created when the first
  // client joins
  if (totalUsers.length >= 2) {
    roomName = 'quickstart-room2';
  }
  

  
  // Identifier to be used for participant.
    
  const participantName = "hello"+Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  const at = new AccessToken('APISR9G848vteWP', 'RcaPTBbC1ee5nDURfHmcOmtSy6SZHdT7De5ddn3cDzeC', {
    identity: participantName,
    // Token to expire after 10 minutes
    ttl: '1m',
  });
  totalUsers.push(participantName);
  at.addGrant({ roomJoin: true, room: roomName });

  return await at.toJwt();
}

const createRoom = async (name) => {
  const opts = {
    name: name+Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    emptyTimeout: 10 * 60, // 10 minutes
    maxParticipants: 20,
  }
};




app.get('/getToken', async (req, res) => {

  res.send(await createToken());
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})