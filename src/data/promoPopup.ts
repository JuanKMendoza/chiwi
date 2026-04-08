import heroImg from "../assets/images/Hero_1_gatos.png";

export interface PromoPopupConfig {
  enabled: boolean;
  title: string;
  message: string;
  seasonTag?: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
}

export const promoPopupConfig: PromoPopupConfig = {
  enabled: true,
  title: "Crea tu gatito personalizado!",
  message:
    "Tu gatito personalizado a imagen de tu peludito. Esta semana tiene 10% OFF. Escríbenos por WhatsApp y diseñamos el tuyo.",
  seasonTag: "Promoción por temporada",
  ctaText: "Quiero mi gatito personalizado",
  ctaHref:
    "https://wa.me/573102278592?text=Hola!%20Quiero%20mi%20gatito%20personalizado%20con%20el%2010%25%20de%20descuento",
  imageSrc: heroImg.src,
};
