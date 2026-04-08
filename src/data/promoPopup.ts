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
  title: "Temporada especial Chiwi",
  message:
    "Descubre nuestras promociones y diseños de temporada. Escríbenos por WhatsApp y te ayudamos a elegir el detalle perfecto.",
  seasonTag: "Promoción por temporada",
  ctaText: "Ver promo por WhatsApp",
  ctaHref:
    "https://wa.me/573102278592?text=Hola!%20Quiero%20conocer%20la%20promoci%C3%B3n%20de%20temporada%20de%20Chiwi",
  imageSrc: "/og-image.png",
};
