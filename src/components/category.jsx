import { Typography, Button } from "@mui/material";

const Filter = ({handleFilter, filter}) => {

  return (
    <div className="flex space-x-8 mx-auto">
      {filter.map((filterText) => {
        return (
          <Button
            className="hover:bg-amber-600  text-amber-600 tracking-widest opacity-70 hover:text-white capitalize font-semibold"
            onClick={() => {
              handleFilter(filterText);
            }}
          >
            {filterText}
          </Button>
        );
      })}
    </div>
  )
}

export default Filter;