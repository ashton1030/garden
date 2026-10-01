import { createHash, randomBytes } from "node:crypto";

const token = randomBytes(32).toString("hex");
const hash = createHash("sha256").update(token).digest("hex");

console.log(`ADMIN_TOKEN=${token}`);
console.log(`ADMIN_TOKEN_HASH=${hash}`);
