import SearchInput from "@/components/searchInput/SearchInput";

const meal_page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center font-bold text-5xl">Meals search</h1>
      <h6 className="text-center font-semibold text-base ">
        here we learn how to add search functionality in your projects
      </h6>
     <SearchInput/>
    </div>
  );
};

export default meal_page;
