import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Menu = ({eachMenu}) => {
  return (
    <Card
      variant="outlined"
      className="p-3 space-y-5 lg:flex lg:space-x-4"
    >
      <CardMedia
        image={eachMenu.img}
        className="max-w-96 aspect-video border-amber-600 border-[4px] lg:min-w-60 rounded-lg"
      />
      <CardContent className="p-0 space-y-5">
        <div className="flex justify-between border-b-2 border-dotted pb-2">
          <Typography
            variant="body2"
            color="initial"
            className="font-bold tracking-wider capitalize"
          >
            {eachMenu.title}
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            className="font-bold tracking-wider text-amber-600"
          >
            {eachMenu.price}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          color="initial"
          className="text-slate-500 opacity-60 tracking-wide"
        >
          {eachMenu.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
 
export default Menu;