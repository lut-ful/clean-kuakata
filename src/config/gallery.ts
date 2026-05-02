/**
 * GALLERY / SLIDESHOW CONFIG
 * ──────────────────────────
 * To add or replace a slide:
 *   1. Add your photo to /public/images/ (recommended: 1600×900 px JPG/WebP).
 *   2. Set `image` to the path e.g. "/images/kuakata-sunrise.jpg".
 *   3. The `gradient` is used as a fallback while the image loads, or when no image is set.
 *   4. Set `active: false` to hide a slide without deleting it.
 */

export type Slide = {
  id: number;
  /** Path in /public/images/ — e.g. "/images/kuakata-sunrise.jpg". null = use gradient only. */
  image: string | null;
  /** CSS gradient string — shown as bg when no image, and as overlay tint color reference */
  gradient: string;
  location: string;
  caption: string;
  tag: string;
  active: boolean;
};

export const SLIDES: Slide[] = [
  {
    id: 1,
    image: "https://drive.google.com/uc?export=view&id=13R1w37Zrxc3i4BfsVdxXFxc38vXqf6ov",                     // → "/images/kuakata-sunrise.jpg" when ready
    gradient: "linear-gradient(135deg, #04120c 0%, #0B6E4F 50%, #e8c97a 100%)",
    location: "Kuakata Beach",
    caption: "The only beach in Bangladesh where you can see both sunrise and sunset over the ocean.",
    tag: "Shagor Konna",
    active: true,
  },
  {
    id: 2,
    image: "https://drive.google.com/uc?export=view&id=1GrgtbIkEjrBI47UDMno7pvTfRZMpvBja",                     // → "/images/kuakata-dolphins.jpg" when ready
    gradient: "linear-gradient(160deg, #0d1b2a 0%, #1e3a5f 50%, #2d6a9f 100%)",
    location: "Bay of Bengal, Kuakata",
    caption: "Irrawaddy dolphins grace these waters — but plastic pollution threatens their survival.",
    tag: "Marine Life",
    active: true,
  },
  {
    // https://drive.google.com/file/d/1LWJCebiWhf1i4wQJf9hZskzukDde6eMi/view?usp=drive_link
    id: 3,
    image: "https://drive.google.com/uc?export=view&id=1LWJCebiWhf1i4wQJf9hZskzukDde6eMi",                     // → "/images/kuakata-dawn.jpg" when ready
    gradient: "linear-gradient(135deg, #1a0a00 0%, #6b3a1f 40%, #d4651a 80%, #e8c97a 100%)",
    location: "Kuakata Sunrise Point",
    caption: "Every morning, the horizon ignites. This beauty belongs to all of Bangladesh.",
    tag: "Sunrise",
    active: true,
  },
  {
    // https://drive.google.com/file/d/1079d020QCM7KZo4SOyoZLs_ba6y5pAb_/view?usp=drive_link
    id: 4,
    image: "https://drive.google.com/uc?export=view&id=1079d020QCM7KZo4SOyoZLs_ba6y5pAb_",                     // → "/images/gangamati-mangroves.jpg" when ready
    gradient: "linear-gradient(160deg, #071810 0%, #0B6E4F 40%, #145c3c 100%)",
    location: "Gangamati Reserved Forest, Kuakata",
    caption: "The mangrove forests beside Kuakata store more carbon per hectare than tropical rainforests.",
    tag: "Mangroves",
    active: true,
  },
  {
    // https://drive.google.com/file/d/1qZ3kV18N_zTCRR1uzdN43Iup7hmRBa13/view?usp=drive_link
    id: 5,
    image: "https://drive.google.com/uc?export=view&id=1qZ3kV18N_zTCRR1uzdN43Iup7hmRBa13",                     // → "/images/red-crabs.jpg" when ready
    gradient: "linear-gradient(135deg, #1a0505 0%, #8b1a1a 40%, #d84040 75%, #e8a07a 100%)",
    location: "Lal Kakrar Char, Kuakata",
    caption: "Thousands of red crabs call this coastline home. Plastic is destroying their habitat.",
    tag: "Red Crabs",
    active: true,
  },
  {
    //https://drive.google.com/file/d/1-eEmVMBymFH9AgGfMfNToyt-RL7RwRy_/view?usp=drive_link
    id: 6,
    image: "https://drive.google.com/uc?export=view&id=1-eEmVMBymFH9AgGfMfNToyt-RL7RwRy_",                     // → "/images/kuakata-sunset.jpg" when ready
    gradient: "linear-gradient(160deg, #0a1628 0%, #1e3a5f 30%, #0B6E4F 70%, #e8c97a 100%)",
    location: "Kuakata Beach",
    caption: "What 500 volunteers will protect on June 5, 2026. This shore. This light. This future.",
    tag: "Sunset",
    active: true,
  },
];
