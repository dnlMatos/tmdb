export const goToHome = (history) => {
  history.push("/");
};

export const goToMovie = (history, id) => {
  history.push(`/movie/${id}`);
};
