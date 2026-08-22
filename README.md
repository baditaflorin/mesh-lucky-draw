# Lucky Draw

Pick a shared random winner with the people in a mesh room. Every entrant and winner is synchronized peer-to-peer with Yjs; this service has no app backend.

**Live:** https://baditaflorin.github.io/mesh-lucky-draw/

## Use it

1. Open the app on two or more devices and join the same room in Settings.
2. Each person enters a draw name.
3. Anyone can press **Draw winner** once the entries are ready.

## Development

`mesh-common` must be a sibling checkout because this app uses its local package.

```bash
npm install
npm run typecheck
npm run test:unit
npm run smoke
```

Pages publishes committed `docs/` from `main`. The root `.woodpecker.yml` runs the same checks in fleet CI. See [privacy details](docs/privacy.md).
