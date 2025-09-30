export default function Chat({ params }: { params: { roomId: string } }) {
    return (
        <div>
            <h1>Chat {params.roomId}</h1>
        </div>
    )
}