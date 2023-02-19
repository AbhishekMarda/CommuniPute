import { mutation } from "./_generated/server";

export default mutation(async ({ db }, username, password) => {
  const users =  await db.query("users")
    .filter(q => q.and(q.eq(q.field("username"), username),
        q.eq(q.field("password"), password))).unique();
    
  return users;
});
