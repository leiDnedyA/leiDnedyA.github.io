import './BulletedList.css';

function BulletedList(props: {items: string[], clickable?: true}) {
  return <ul className="BulletedList">
    {props.clickable === true ?
    props.items.map((item, index) => {
        return <li key={`item_${index}`}><a href={item}>{item}</a></li>
      }) :
    props.items.map((item, index) => {
        return <li key={`item_${index}`}>{item}</li>
      })
    }
  </ul>
}

export default BulletedList;
