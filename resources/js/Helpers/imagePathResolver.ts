export default function imagePathResolver(image: string): string {
    return image.replace("public", "/storage");
}
