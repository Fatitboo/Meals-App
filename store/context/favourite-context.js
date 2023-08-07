import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite:(id)=>{}
});
function FavouriteContextProvider({children}){
    const [FavouriteIds, setFavouriteIds] = useState([]);
    function AddFavourite(id){  
        setFavouriteIds((currentIds)=> [...currentIds, id]);
    };
    function RemoveFavourite(id){
        setFavouriteIds((currentIds)=> currentIds.filter((mealId)=>mealId!==id));
    };
    const value = {
        ids: FavouriteIds,
        addFavourite:AddFavourite,
        removeFavourite:RemoveFavourite
    };
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}
export default FavouriteContextProvider;