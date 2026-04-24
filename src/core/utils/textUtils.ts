export const cleanBrawlText = (text: string) => {
    if (!text) return "";
    return text.replace(/<![^>]*>/g, "x");
}