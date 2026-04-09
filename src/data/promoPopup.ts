import heroImg from "../assets/images/Hero_1_gatos.png";

export interface PromoPopupConfig {
  enabled: boolean;
  title: string;
  message?: string;
  messagePrefix?: string;
  messageHighlight?: string;
  messageSuffix?: string;
  seasonTag?: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
}

export const promoPopupConfig: PromoPopupConfig = {
  enabled: true,
  title: "Mes de los gatitos!",
  messagePrefix: "Por este mes todas las velitas de Gatitos personalizados tienen un",
  messageHighlight: "10% Dcto",
  messageSuffix: ". Escribenos y te creamos el tuyo.",
  seasonTag: "Promocion de temporada",
  ctaText: "Quiero mi gato velita!",
  ctaHref:
    "https://wa.me/573102278592?text=Hola!%20Quiero%20mi%20gatito%20personalizado%20con%20el%2010%25%20de%20descuento",
  imageSrc: heroImg.src,
};
