import Image from "next/image";

export function Chef() {
  return <Image
    src={'/chefNoBg.PNG'}
    alt="Chef Nor"
    width={250}
    height={250}
    placeholder="blur"
    blurDataURL="/chefNoBg.PNG"
  />
}
