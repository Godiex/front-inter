export const USERS = {
  NAME: "users",
  USER: "student/:identification/:subjectId",
  CREATE: "create",
};
export const SUBJECTS = {
  NAME: "subjects",
  SUBJECT: "subject/:identification",
  ADD: "add",
};
export const MODULES = {
  USERS: {
    USER: `/${USERS.NAME}/${USERS.USER}`,
    CREATE: `/${USERS.NAME}/${USERS.CREATE}`,
  },
};
