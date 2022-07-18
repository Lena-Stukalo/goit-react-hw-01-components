import { Profile } from './profile/Profile'
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import{TransactionHistory} from './transactionHistory/TransactionHistory'
import user from '../data/user'
import data from '../data/data'
import friends from '../data/friends'
import  transition from '../data/transactions';
export const App = () => {
  return (
    <div>
      <Profile key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title='Upload stats' stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transition} />
    </div>
  );
};
