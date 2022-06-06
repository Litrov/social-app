import * as React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../redux/users-reducer";

export type PropsType = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: () => void
    unfollow: () => void
}

let Users: React.FC<PropsType> = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} pageSize={pageSize} totalItemsCount={totalItemsCount}
                   onPageChanged={onPageChanged}/>
        <div>
            {users.map(u => <User user={u}
                                  key={u.id}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                />
            )
            }
        </div>
    </div>
}

export default Users;