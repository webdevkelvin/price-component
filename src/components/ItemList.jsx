import "./ItemList.css";

const data = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our GitHub repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

function ItemList() {
  const renderedItems = data.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return <ul className="items">{renderedItems}</ul>;
}

export default ItemList;
