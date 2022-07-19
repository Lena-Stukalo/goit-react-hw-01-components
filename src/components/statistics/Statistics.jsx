import PropTypes from 'prop-types';
import css from './statistics.module.css' 

export function Statistics({title,stats}) {
    return <section>
        {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statList}>
            {stats.map(stat => <li key={stat.id} className="item">
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
    </li>)}
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id:PropTypes.string.isRequired,
    }))
}