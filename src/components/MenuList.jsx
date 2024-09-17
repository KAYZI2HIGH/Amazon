import Menu from "./menu";

const MenuList = ({ menu }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-3">
      {menu.map((eachMenu) => (
        <Menu eachMenu={eachMenu} key={eachMenu.id} />
      ))}
    </div>
  );
};

export default MenuList;
