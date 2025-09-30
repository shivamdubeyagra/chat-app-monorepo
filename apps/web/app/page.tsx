
"use client"
import { TextInput } from "@repo/ui/text-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomName, setRoomName] = useState("")
  const router = useRouter()
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <TextInput placeholder="Enter room name" value={roomName} onChange={(e) => setRoomName(e.target.value)}/>
      <button onClick={() => router.push(`/chat/${roomName}`)}>Join Room</button>
    </div>
  );
}
