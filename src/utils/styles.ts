 export const getBgGradient = (condition : string) : string => {
    switch (condition){
        case "Sunny":
            return "from-yellow-400/80 to-orange-500/80";
        case "Rainy":
            return "from-blue-600/80 to-gray-700/80";
        case "Cloudy":
            return "from-gray-500/80 to-gray-600/80";
        default:
            return "from-gray-900 to-gray-800";
    }
 }

 export const tempGlow = (temp : number ) : string => {
    if(temp > 100)
        return "[0_0_10px_rgba(250, 204, 21, 0.7)]";
    else if(temp > 80)
        return "[0_0_10px_rgba(249, 115, 22, 0.7)]"
    else if(temp > 60)
        return "[0_0_10px_rgba(34, 211, 238, 0.7)]";
    else if(temp > 40)
        return "[0_0_10px_rgba(59, 130, 246, 0.7)]";
    else
        return "[0_0_10px_rgba(255, 255, 255, 0.7)]";
 }

 export const getTextColor = (condition: string): string => {
     switch (condition) {
         case "Sunny":
             return "text-gray-900"; // Dark text for bright conditions
         case "Rainy":
         case "Cloudy":
         case "Stormy":
             return "text-white"; // Light text for dark conditions
         default:
             return "text-gray-200"; // Default to a light gray for unknown conditions
     }
 };