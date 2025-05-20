import NavigationListItem from "./NavigationListItem";

function NavigationList({ content }) {
  return (
    <ul className={`flex text-(--white) gap-3 lg:w-fit lg:gap-8 capitalize`}>
      {content.map((item, i) => (
        <NavigationListItem tag={item} key={i} />
      ))}
    </ul>
  );
}

export default NavigationList;
