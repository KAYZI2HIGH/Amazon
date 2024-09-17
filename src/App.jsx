import Typography from "@mui/material/Typography";
import MenuList from "./components/MenuList";
import menu from "./data";
import { useState } from "react";
import Filter from "./components/category";

function App() {

  const [data, setData] = useState(menu);
  const [filter, setFilter] = useState([
    "all",
    ...new Set(
      menu.map((each) => {
        return each.category;
      })
    ),
  ]);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setData(menu)
    } else if (filter === 'breakfast') {
      setData(menu.filter((each) => each.category === 'breakfast'))
    } else if (filter === 'lunch') {
      setData(menu.filter((each) => each.category === 'lunch'))
    } else if (filter === 'shakes') {
      setData(menu.filter((each) => each.category === 'shakes'))
    }
  };

  console.log(filter);
  
  
  return (
    <div className="bg-blue-300 bg-opacity-5 w-vw h-vh py-[10%] px-[5%]">
      <div className="flex flex-col justify-center align-middle mx-auto w-fit space-y-10 max-w-[400px] sm:max-w-full">
        <header className="w-fit mx-auto">
          <Typography
            variant="h3"
            color="initial"
            className="font-bold text-3xl tracking-wider"
          >
            Our Menu
          </Typography>
          <div className="w-2/3 h-1 bg-orange-800 mx-auto mt-1 rounded-sm"></div>
        </header>
        <Filter handleFilter={handleFilter} filter={filter} />
        <MenuList menu={data} />
      </div>
    </div>
  );
}

export default App;
