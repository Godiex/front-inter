export const IDENTITIES = {
  NAME: "identity",
  LOGIN: "login",
  ADD: "create",
};
export const SUBJECTS = {
  NAME: "subjects",
  SUBJECT: "subject/:identification",
  ADD: "add",
};
export const MODULES = {
  IDENTITIES: {
    USER: `/${IDENTITIES.NAME}/${IDENTITIES.LOGIN}`,
    ADD: `/${IDENTITIES.NAME}/${IDENTITIES.ADD}`,
  },
};
