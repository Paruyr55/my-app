import axios from 'axios';
import React from 'react';
import classes from './users.module.css'
import userIcon from '../../images/user_icon.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });

    };

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map(u => {
                        console.log(u);
                        return (
                            <div key={u.id}>
                                <span>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userIcon} alt="avatar" className={classes.usersPhoto} />
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>
                                            {u.name}
                                        </div>
                                        <div>
                                            {u.status}
                                        </div>
                                    </span>
                                    <span>

                                    </span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

export default Users;