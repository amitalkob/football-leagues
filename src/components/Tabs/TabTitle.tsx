import React, { useCallback } from "react"

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isSelected?: boolean;
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, isSelected}) => {

    return (
        <div>
            <button className={isSelected ? "tab_selected" : "tab"} onClick={(e)=>setSelectedTab(index)}>{title}</button>
        </div>
    )
}

export default TabTitle


