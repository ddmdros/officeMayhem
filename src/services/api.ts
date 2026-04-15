export const getBrawlers = async() => {
    try{
        const response = await fetch("api/brawlers");
        if(!response.ok){
            throw new Error("Failed to fetch brawlers");
        }
        const data = await response.json();
        return data.items;
    } catch(error){
        console.error("API Service Error: ", error);
        throw error;
    }
};

