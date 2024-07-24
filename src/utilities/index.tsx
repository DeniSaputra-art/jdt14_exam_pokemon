export const getBaseApiUrl = () => {
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
    return baseApiUrl as string;
}

export const getBaseImgUrl = () => {
    const baseImgUrl = import.meta.env.VITE_BASE_IMG_URL;
    return baseImgUrl as string;
}

export const getBaseGifUrl = () => {
    const baseGifUrl = import.meta.env.VITE_BASE_GIF_URL;
    return baseGifUrl as string;
}