import { ReactComponent as SearchIcon } from "./search.svg";
interface SearchBoxProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

function Search({ placeholder, onSearch }: SearchBoxProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="relative flex flex-row justify-center items-center min-w-[200px] w-full">
      <SearchIcon className="absolute left-3" />
      <input
        onSubmit={handleInputChange}
        type="text"
        placeholder={placeholder}
        className="border-[1px] rounded-full w-full border-lightSecondary bg-transparent text-sm py-3 px-9 outline-none"
      />
    </div>
  );
}

export default Search;
