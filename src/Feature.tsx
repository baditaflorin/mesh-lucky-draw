import { useState } from "react";
import { useSharedLottery, type MeshConfig, type YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };

export function Feature({ room, config }: Props) {
  const lottery = useSharedLottery(room);
  const [name, setName] = useState("");
  const winner = lottery.entries.find((entry) => entry.peerId === lottery.winner);

  return (
    <main className="feature-placeholder">
      <h1>{config.appName}</h1>
      <p>Everyone joins the draw with a name. When the room is ready, draw a winner together.</p>
      <p className="feature-status">
        {room ? `Connected · ${room.peerCount} peer(s)` : "Connecting…"}
      </p>
      <form
        className="entry-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (lottery.enter(name)) setName("");
        }}
      >
        <label htmlFor="entry-name">Your draw name</label>
        <div>
          <input
            id="entry-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Maya"
            maxLength={80}
          />
          <button type="submit">Join draw</button>
        </div>
      </form>
      <section className="panel" aria-live="polite">
        <h2>
          {lottery.entries.length} entrant{lottery.entries.length === 1 ? "" : "s"}
        </h2>
        <ul>
          {lottery.entries.map((entry) => (
            <li key={entry.peerId}>{entry.label}</li>
          ))}
        </ul>
        <button
          className="draw-button"
          type="button"
          onClick={lottery.draw}
          disabled={!lottery.entries.length}
        >
          Draw winner
        </button>
        {winner ? (
          <p className="winner">🎉 {winner.label} wins!</p>
        ) : (
          <p className="hint">Add entrants, then pick one at random.</p>
        )}
      </section>
    </main>
  );
}
