
function BulletedList(props: {items: string[]}) {
  return <ul>
    {props.items.map((item, index) => {
        return <li key={`item_${index}`}>{item}</li>
      })}
  </ul>
}

export default BulletedList;
