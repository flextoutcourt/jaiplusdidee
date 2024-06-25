
export default function SearchInput({handleChange}: any) {
    return (
      <>
          <input type="search" onChange={handleChange} placeholder='Search' className="bg-white w-full rounded-lg p-2" />
      </>
    );
  }
  