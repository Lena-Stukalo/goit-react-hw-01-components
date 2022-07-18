import PropTypes from 'prop-types';
import css from './friendItem.module.css'

export function FriendItem({avatar, name, isOnline}) {
    return <li className={css.item}>
        <span className={isOnline ? (css.online) : (css.ofline)}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
</li>
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}