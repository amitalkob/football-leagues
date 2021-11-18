import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  
  return (
    <div className="tabs">
        <div className="tabs_container">
            {children.map((item, index) => (
            <TabTitle
                key={index}
                title={item.props.title}
                index={index}
                setSelectedTab={setSelectedTab}
                isSelected={selectedTab ===index ? true : false}
            />
            ))}
        </div>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs