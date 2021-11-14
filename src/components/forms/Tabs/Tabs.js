import { useState } from 'react';
import { TabItem } from '../TabItem/TabItem';

const Tabs = ({ tabs, selected, style, onChange }) => {
  console.log('Tabs RENDERIZADO');
  const [tabSelected, setTabSelected] = useState(selected);
  
  return (
    <>
      <ul className="list-none p-0 mt-6 mb-1 flex justify-center flex-wrap" style={style}>
        {tabs.map((i, k) => {
          return <li key={k} className="my-0 mx-5 h-auto list-item w-auto justify-center">
            <TabItem name={i.name} icon={i.icon} isSelected={ i.name === tabSelected} onClick={(e, name) => {
              setTabSelected(name);
              onChange(name);
            }}/>
          </li>
        })}
      </ul>
    </>
  )
}

export { Tabs };