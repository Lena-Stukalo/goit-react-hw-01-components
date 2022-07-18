import PropTypes from 'prop-types';
import { FriendItem } from '../friendItem/FriendItem'
import css from './friendList.module.css'

export function FriendList({friends}) {
    return <ul className={css.friendList}>
        {friends.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} key={friend.id} isOnline={friend.isOnline} />)}
</ul>
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
    )
}