export const capitalizeEveryWord = (input: string): string =>
  input
    .split(" ")
    .map((word) =>
      word
        .split("-")
        .map(
          (subWord) =>
            subWord.charAt(0).toUpperCase() + subWord.slice(1).toLowerCase(),
        )
        .join("-"),
    )
    .join(" ");
