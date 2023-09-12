import { SearchBoxGlobal } from "./style";
const SearchBox = ({ data, something, placeholder,onChange, ...props }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <SearchBoxGlobal>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    className="search-box"
                    placeholder={placeholder}
                    onChange={onChange}
                    {...props}
                />
            </form>
        </SearchBoxGlobal>
    )
}
export default SearchBox;