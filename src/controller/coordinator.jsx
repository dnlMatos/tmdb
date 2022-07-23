export const goToHome = (history) => {
  history.push("/");
};

export const goToMovie = (history) => {
  history.push(`/:id`);
};
