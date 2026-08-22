export default async function luckyDrawScenario(a, b) {
  await a.getByLabel("Your draw name").fill("Avery");
  await a.getByRole("button", { name: "Join draw" }).click();
  await b.getByLabel("Your draw name").fill("Jordan");
  await b.getByRole("button", { name: "Join draw" }).click();
  await a.getByText("2 entrants").waitFor({ timeout: 10_000 });
  await a.getByRole("button", { name: "Draw winner" }).click();
  await a.getByText(/wins!/).waitFor({ timeout: 10_000 });
  await a.waitForTimeout(1_000);
}
