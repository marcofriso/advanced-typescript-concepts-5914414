// Replace the three interfaces with a generic interface that can be used to define the three types of users.

// SOL 1

// interface Role {
//   id: number;
//   username: string;
// }

// type Admin = Role & { adminPermissions: string[] };
// type Member = Role & { memberSince: Date };
// type Guest = Role & { expirationDate: Date };

// type UserType = Admin | Guest | Member;

// SOL 2

type UserType = "admin" | "guest" | "member";

interface User<T extends UserType> {
  id: number;
  username: string;
  adminPermissions?: T extends "admin" ? string[] : void;
  expirationDate?: T extends "guest" ? Date : void;
  memberSince?: T extends "member" ? Date : void;
}

// Update the function to accept the new generic user type.
function updateUser<T extends UserType>(user: User<T>) {
  console.log(`Updating user ${user.username}`);

  if (user.adminPermissions && "adminPermissions" in user) {
    console.log("Permissions:", user.adminPermissions.join(", "));
  }
  if (user.expirationDate && "expirationDate" in user) {
    console.log("Expires:", user.expirationDate.toISOString());
  }
  if (user.memberSince && "memberSince" in user) {
    console.log("Member Since:", user.memberSince.toISOString());
  }
}

// Update the function calls to use the new generic user type.
const admin: User<"admin"> = {
  id: 1,
  username: "adminUser",
  adminPermissions: ["manage_system", "modify_users"],
};

const guest: User<"guest"> = {
  id: 2,
  username: "guestUser",
  expirationDate: new Date(),
};

const member: User<"member"> = {
  id: 3,
  username: "memberUser",
  memberSince: new Date(),
};

updateUser(admin);
updateUser(guest);
updateUser(member);

export {};
