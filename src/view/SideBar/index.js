import React, { useEffect, useState } from 'react'
import './style.scss'
import { AiFillHome, AiOutlineRight } from 'react-icons/ai'
import { MdShoppingCart } from 'react-icons/md'
import { Dashboard } from '../Dashbord'
import { Pos } from '../Pos'

export const SideBar = () => {
  const [sidebarActive, setSidebarActive] = useState('Dashboard')
  const [hndelOflineRIngth, setHndelOflineRIngth] = useState(false)
  let menuItems = [
    {
      name: 'Dashboard',
      iconName: <AiFillHome />
    },
    {
      name: 'POS',
      iconName: <MdShoppingCart />
    }
  ]

  return (
    <div className={hndelOflineRIngth ? 'sidebar-big sidebar' : 'sidebar'}>
      <div className='sidebar-left'>
        <AiOutlineRight
          className={
            hndelOflineRIngth
              ? 'rotate-180 sidebar-icon-right'
              : 'sidebar-icon-right'
          }
          onClick={() => setHndelOflineRIngth(!hndelOflineRIngth)}
        />
        {menuItems.map((item, index) => {
          return (
            <div
              className={`sidebar-conten ${sidebarActive === item.name &&
                'sidebar-active'} ${index === 0 && 'pos-m-10 '}`}
              onClick={() => setSidebarActive(item.name)}
              key={index}
            >
              <div className='sidebar-icon d-flex'>
                {item.iconName}

                <p className={!hndelOflineRIngth && 'd-none'}>
                  {item.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='sidebar-right'>
        {sidebarActive === 'Dashboard' && <Dashboard />}
        {sidebarActive === 'POS' && <Pos />}
      </div>
      <div />
    </div>
  )
}
