import React from 'react'
import UserCard from './UserCard'
import ReportCards from './ReportCards'

export default function Sidebar() {
    return (
        <div className="navbar">
            <UserCard name="UserAdmin" role="superadmin"/>
            <ReportCards />
        </div>
    )
}
