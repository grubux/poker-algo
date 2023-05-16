type TPokerNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "J" | "Q" | "K";
type TPokerColors = "H" | "S" | "C" | "D";
type TDeck = Array<TPokerNumbers | TPokerColors>;

const cardsColors: TPokerColors[] = ["H", "S", "C", "D"];
const cardsNumbers: TPokerNumbers[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "J",
  "Q",
  "K",
];

const start = () => {
  const deckInitialised = initialiseDeck();
  const swappedDeck = swapCards(deckInitialised, 1, 10);
  const shuffledDeck = shuffle(swappedDeck);
  console.log(
    "deckInitialised: length:",
    deckInitialised.length,
    deckInitialised
  );
  console.log("swappedDeck: length:", swappedDeck.length, swappedDeck);
  console.log("shuffledDeck: length:", shuffledDeck.length, shuffledDeck);
};

const initialiseDeck = (): TDeck => {
  return cardsColors
    .map((color: TPokerColors) => {
      return cardsNumbers.map((number: TPokerNumbers) => {
        return [number, color];
      });
    })
    .flat(2);
};

const swapCards = (deck: TDeck, card1: number, card2: number): TDeck => {
  let resDeck: TDeck[] = groupCards(deck);

  // Stock card1 in temporary variable because it will be overwritten
  const temp = resDeck[card1 - 1];
  // Reassign card1 number and color to card2 number and color
  resDeck[card1 - 1] = resDeck[card2 - 1];
  // Reassign card2 number and color to card1 number and color
  resDeck[card2 - 1] = temp;

  return resDeck.flat();
};

const shuffle = (deck: TDeck) => {
  let resDeck: TDeck[] = groupCards(deck);

  // random shuffle
  for (let i = resDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = resDeck[i];
    resDeck[i] = resDeck[j];
    resDeck[j] = temp;
  }

  return resDeck.flat();
};

// Utils
const groupCards = (deck: TDeck): TDeck[] => {
  let groupedCards: TDeck[] = [];

  for (let i = 2; i < deck.length + 1; i += 2) {
    groupedCards.push([deck[i - 2], deck[i - 1]]);
  }
  return groupedCards;
};
//

start();
