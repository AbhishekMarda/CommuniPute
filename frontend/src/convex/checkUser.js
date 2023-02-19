import { query } from "./_generated/server";

export default query(async ({ db }, username, password) => {
  const users = await db.query("users").collect()
  console.log(users);
  return users;
});
