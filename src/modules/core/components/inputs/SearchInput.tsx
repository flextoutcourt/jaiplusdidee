
export default function SearchInput({handleChange}: any) {
    return (
      <>
          <input type="search" onChange={handleChange} placeholder='Search' className="bg-gray-200 w-full rounded-lg py-1 px-2 mb-2" />
      </>
    );
  }
  