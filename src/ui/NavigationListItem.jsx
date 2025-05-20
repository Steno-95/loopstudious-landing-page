function NavigationListItem({ href = "", tag }) {
  return (
    <li>
      <a href={href}>{tag}</a>
    </li>
  );
}

export default NavigationListItem;
