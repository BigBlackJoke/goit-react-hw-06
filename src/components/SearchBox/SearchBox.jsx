import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.container}>
            <label className={css.label} htmlFor="search">Find contacts by name</label>
            <input className={css.input} id="search" type="text" value={value}
                onChange={(e) => onFilter(e.target.value)} />
        </div>
    )
}